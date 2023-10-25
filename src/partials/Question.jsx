import * as te from 'tw-elements';
import { useParams } from 'react-router-dom';

function Question() {
  const id = useParams().id.replace(/^0/, '');
  const instructions = [
    <div data-te-modal-body-ref className="relative p-4" key="1">
      <p>コンソールに<strong>「JavaScriptの学習を始めよう！」</strong>と出力してください。</p>
    </div>,
    <div data-te-modal-body-ref className="relative p-4" key="2">
      <ol>
        <li>数値<strong>10</strong>、文字列<strong>"JavaScript"</strong>、真偽値<strong>true</strong>を変数に代入し、コンソールに出力してください。</li>
        <li>数値<strong>10</strong>と<strong>20</strong>を足した結果をコンソールに出力してください。</li>
      </ol>
    </div>,
    <div data-te-modal-body-ref className="relative p-4" key="3">
      <ol>
        <li><strong>0</strong>から<strong>9</strong>までの数字をコンソールに出力するfor文を作成してください。</li>
        <li>数値<strong>5</strong>が正の数であるかを判定するif文を作成してください。</li>
      </ol>
    </div>,
    <div data-te-modal-body-ref className="relative p-4" key="4">
      <ol>
        <li>配列に<strong>1, 2, 3</strong>を代入し、配列の最後に<strong>4</strong>を追加してください。その後、配列の2番目の要素をコンソールに出力してください。</li>
        <li>オブジェクトに<strong>{'{name: "Alice", age: 20}'}</strong>を代入し、新しいプロパティ<strong>city</strong>を追加してください。その後、<strong>age</strong>プロパティをコンソールに出力してください。</li>
      </ol>
    </div>,
    <div data-te-modal-body-ref className="relative p-4" key="5">
      <ol>
        <li>次の仕様を満たす関数<strong>multiply</strong>を定義してください。
          <ul>
            <li>引数: 2つの数値</li>
            <li>戻り値: 引数の数値を掛け算した結果</li>
          </ul>
          また、定義した関数を呼び出し、その結果をコンソールに表示してください。
        </li>
        <li>以下の要件を満たすコードを書いてください。
          <ol>
            <li>グローバルスコープに変数<strong>c</strong>を宣言し、値<strong>30</strong>を代入してください。</li>
            <li>関数<strong>scopeFunction</strong>を定義してください。
              <ul>
                <li>関数内で、ローカルスコープに変数<strong>d</strong>を宣言し、値<strong>40</strong>を代入してください。</li>
                <li>関数内で、変数<strong>c</strong>と変数<strong>d</strong>の和をコンソールに表示してください。</li>
              </ul>
            </li>
            <li><strong>scopeFunction</strong>を呼び出してください。</li>
            <li>グローバルスコープから変数<strong>d</strong>にアクセスしようとしてください。何が表示されるか確認してください。</li>
          </ol>
        </li>
      </ol>
    </div>
  ];

  const estimatedTime = (
    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
      目安時間: 10分
    </div>
  );
  return (
    <>
      <button
        type="button"
        className="inline-block rounded-full bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-toggle="modal"
        data-te-target="#staticBackdrop"
      >
        問{id}
      </button>
      <div
        data-te-modal-init
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="staticBackdrop"
        data-te-keyboard={false}
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden={true}
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5 className="text-xl font-medium leading-normal text-gray-700" id="exampleModalLabel">
                問{id}
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {instructions[id]}
            {estimatedTime}
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
