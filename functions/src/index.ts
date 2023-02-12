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

export const handler = functions.https.onCall(async (data, context) => {
  console.log("data===", data)
  // read body from request
  const body = data;
  console.log("body===", body)
  console.log("messages===", body.messages)

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