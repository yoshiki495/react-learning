import * as functions from 'firebase-functions';
import axios, { AxiosResponse } from 'axios';

// break the app if the API key is missing
if (!functions.config().openai.apikey) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY');
}

type Message = {
  who: 'bot' | 'user' | undefined
  message?: string
}

const initialMessages: Message[] = [
  {
    who: 'bot',
    message: 'Hi! I’m an AI assistant for you. Ask me anything!!',
  },
]

const botName = 'AI';
const userName = 'News reporter'; // TODO: move to ENV var
const firstMessge = initialMessages[0].message;

// @TODO: unit test this. good case for unit testing
const generatePromptFromMessages = (messages: Message[]) => {
  console.log('== INITIAL messages ==', messages);

  let prompt = '';

  // add first user message to prompt
  prompt += messages[1].message;

  // remove first conversaiton (first 1 messages)
  const messagesWithoutFirstConvo = messages.slice(1);
  console.log(' == messagesWithoutFirstConvo', messagesWithoutFirstConvo);

  // early return if no messages
  if (messagesWithoutFirstConvo.length == 0) {
    return prompt;
  }

  messagesWithoutFirstConvo.forEach((message: Message) => {
    const name = message.who === 'user' ? userName : botName;
    prompt += `\n${name}: ${message.message}`;
  });
  return prompt;
};

export const chat = functions.https.onCall(async (data, context) => {
  
  const body = data;
  const messagesPrompt = generatePromptFromMessages(body.messages);
  const defaultPrompt = `I am Friendly AI Assistant. \n\nThis is the conversation between AI Bot and a news reporter.\n\n${botName}: ${firstMessge}\n${userName}: ${messagesPrompt}\n${botName}: `;
  const finalPrompt = functions.config().ai.prompt
    ? `${functions.config().ai.prompt}${messagesPrompt}\n${botName}: `
    : defaultPrompt;

  const payload = {
    model: 'text-davinci-003',
    prompt: finalPrompt,
    temperature: functions.config().ai.temp ? parseFloat(functions.config().ai.temp) : 0.7,
    max_tokens: functions.config().ai.maxtokens
      ? parseInt(functions.config().ai.maxtokens)
      : 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [`${botName}:`, `${userName}:`],
    user: body?.user,
  };

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${functions.config().openai.apikey}`,
  };

  if (functions.config().openai.apiorg) {
    requestHeaders['OpenAI-Organization'] = functions.config().apiorg;
  }

  const response: AxiosResponse<any> = await axios({
    method: 'post',
    url: 'https://api.openai.com/v1/completions',
    headers: requestHeaders,
    data: JSON.stringify(payload),
  });

  try {
    // return response with 200 and stringify json text
    return { text: response.data.choices[0].text };
  } catch (error) {
    return {
      text: `ERROR with API integration. ${error}`,
    };
  }
})

export const review = functions.https.onCall(async (data, context) => {
  
  const body = data;
  const value = body.value;
  const id = body.id;
  const instructions = [
    'コンソールに「JavaScriptの学習を始めよう！」と出力してください。',
    '数値10、数値20をnum1、num2という名前の変数に代入し、コンソールに出力してください。\n2. num1とnum2を足したものをnum3という名前の変数に代入し、コンソールに出力してください。',
    '0から9までの数字をコンソールに出力するfor文を作成してください.\n2. 数値5が正の数であるかを判定するif文を作成してください.',
    '配列に1, 2, 3を代入し、配列の最後に4を追加してください。その後、配列の2番目の要素をコンソールに出力してください.\n2. オブジェクトに{name: "Alice", age: 20}を代入し、新しいプロパティcityを追加してください。その後、ageプロパティをコンソールに出力してください.',
    '次の仕様を満たす関数multiplyを定義してください。引数: 2つの数値。戻り値: 引数の数値を掛け算した結果。また、定義した関数を呼び出し、その結果をコンソールに表示してください.\n2. 以下の要件を満たすコードを書いてください。グローバルスコープに変数cを宣言し、値30を代入してください。関数scopeFunctionを定義してください。関数内で、ローカルスコープに変数dを宣言し、値40を代入してください。関数内で、変数cと変数dの和をコンソールに表示してください。scopeFunctionを呼び出してください。グローバルスコープから変数dにアクセスしようとしてください。何が表示されるか確認してください.'
  ];
  const prompt = "あなたはJavaScriptを学んでいる生徒の先生をしています。生徒は現在" + 
  instructions[id]
 + "というコーディング問題に対して"
 + value + "というコードを書きました。あなたは先生としてコードの正解不正解とレビューを日本語による200字程度でしてあげてください。コードが正解の場合には、次の学習へ進みましょう！と言ってあげてください。";
  console.log("id", id);
  console.log(prompt);
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ "role": "user", "content": prompt }],
  };

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${functions.config().openai.apikey}`,
  };

  if (functions.config().openai.apiorg) {
    requestHeaders['OpenAI-Organization'] = functions.config().apiorg;
  }
  try {
    const response: AxiosResponse<any> = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: requestHeaders,
      data: JSON.stringify(payload),
    });
    // return response with 200 and stringify json text
    console.log(response.data.choices[0]);
    return { text: response.data.choices[0].message.content };
  } catch (error) {
    console.error(error);
    return {
      text: `ERROR with API integration. ${error}`,
    };
  }
})

export const execute = functions.https.onCall(async (data, context) => {

  const vm = require('vm');
  // 実行するJavaScriptのコード文字列
  const body = data;
  const codeString = body.codeString;
  try {
    // Node.js VMを使用して、コード文字列を実行する
    const script = new vm.Script(codeString);
    const result: string[] = [];
    const context = {
      console: {
        log: (output: string) => {
          result.push(output, '\n');
        },
      },
    };
    script.runInNewContext(context);
    console.log(result);
    return { result: result };
  } catch (error) {
    return { result: String(error) };
  }
});