import * as te from 'tw-elements';

function Question(props) {
  return (
    <>
      <button
        type="button"
        className="inline-block rounded-full bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-toggle="modal"
        data-te-target="#staticBackdrop"
      >
        問1
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
                問1
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
            <div data-te-modal-body-ref className="relative p-4">
              以下の条件を満たすコードを書いてください。
              <ul className="list-disc pl-6 pt-2 pb-2">
                <li>変数<strong>num1</strong>と<strong>num2</strong>にそれぞれ数値を代入します。</li>
                <li>変数<strong>sum</strong>に<strong>num1</strong>と<strong>num2</strong>の和を代入します。</li>
                <li>変数<strong>diff</strong>に<strong>num1</strong>と<strong>num2</strong>の差を代入します。</li>
                <li>変数<strong>isGrater</strong>に<strong>num1</strong>が<strong>num2</strong>よりも大きいかどうかの真偽値を代入します。</li>
              </ul>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              目安時間: 10分
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Question;
