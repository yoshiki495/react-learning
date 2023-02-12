import React from 'react';
import { useState } from 'react';
import { Text } from '@vercel/examples-ui'
import Chat from '../../partials/Chat';

function JavaScriptContent01() {
  const [sidebarNavOpen, setSidebarNavOpen] = useState(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="md:flex md:justify-between" data-sticky-container>
      <aside className="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:shrink-0">
            <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>

            {/* Search form */}
            <form className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex flex-wrap">
                <div className="w-full">
                    <label className="block text-sm sr-only" htmlFor="search">Search</label>
                    <div className="relative flex items-center">
                    <input id="search" type="search" className="form-input w-full text-gray-800 px-3 py-2 pl-10" placeholder="Search the docs" />
                    <button type="submit" className="absolute inset-0 right-auto" aria-label="Search">
                        <svg className="w-4 h-4 fill-current text-gray-400 mx-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </form>

            <button className="flex items-center justify-between text-lg font-medium text-gray-900 w-full my-4 md:hidden" onClick={(e) => { e.preventDefault(); setSidebarNavOpen(!sidebarNavOpen); }}>
                <span>Docs navigation</span>
                <svg className="w-3 h-3 fill-current text-blue-600 shrink-0 ml-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${sidebarNavOpen && '!rotate-180'}`} />
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${sidebarNavOpen && '!rotate-180'}`} />
                </svg>
            </button>


            {/* Docs nav */}
            <nav className={`md:block ${!sidebarNavOpen && 'hidden'}`}>
                <ul className="font-medium -my-2">
                {/* 1st level */}
                <li className="py-2">
                    <a
                    className="flex items-center hover:underline"
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setSidebarLinkOpen(!sidebarLinkOpen); }}
                    aria-expanded={sidebarLinkOpen}
                    >
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3.294L1.4 1.035C1.1.847.7.941.4 1.13c-.2.189-.4.471-.4.753v10.353c0 .377.2.753.6.847L7 15.718V3.294zM15.6 1.13c-.3-.189-.6-.189-.9-.095L9 3.295v12.423l6.4-2.542c.4-.188.6-.47.6-.847V1.882c0-.282-.2-.564-.4-.753z" />
                        </svg>
                        <span>JavaScriptの基本構文</span>
                    </div>
                    <svg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                    </svg>
                    </a>
                    {/* 2nd level */}
                    <ul
                    className={`font-normal -mb-1 mt-1 ml-2 pl-5 border-l border-gray-300 ${!sidebarLinkOpen && 'hidden'}`}
                    >
                    <li className="py-1">
                        <a className="text-gray-600 hover:underline" href="#variable">変数</a>
                    </li>
                    <li className="py-1">
                        <a className="text-gray-600 hover:underline" href="#type">データ型</a>
                    </li>
                    <li className="py-1">
                        <a className="text-gray-600 hover:underline" href="#operator">演算子</a>
                    </li>
                    <li className="py-1">
                        <a className="text-gray-600 hover:underline" href="#control">制御構造</a>
                    </li>
                    </ul>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript02">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4H4c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1zM12 10H1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1zM15 16H4c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1z" />
                        </svg>
                        <span>DOMの概念と操作方法</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript03">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9H1a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1zM6 16H1a1 1 0 01-1-1v-3a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1zM15 6h-5a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1zM15 16h-5a1 1 0 01-1-1V9a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1z" />
                        </svg>
                        <span>JavaScriptによるイベント処理</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript04">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 15.414l-2.5-3V1a1 1 0 011-1h3a1 1 0 011 1v11.414l-2.5 3zM7 0H1C.4 0 0 .4 0 1v2h3v2H0v2h3v2H0v2h3v2H0v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
                        </svg>
                        <span>JavaScriptのオブジェクト指向プログラミング</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript05">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.5" cy="4.5" r="4.5" />
                        <circle cx="12" cy="13" r="3" />
                        <circle cx="14.5" cy="5.5" r="1.5" />
                        </svg>
                        <span>関数型プログラミング</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript06">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.5" cy="4.5" r="4.5" />
                        <circle cx="12" cy="13" r="3" />
                        <circle cx="14.5" cy="5.5" r="1.5" />
                        </svg>
                        <span>JavaScriptのライブラリやフレームワーク、jQueryなどの使用方法</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript07">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.5" cy="4.5" r="4.5" />
                        <circle cx="12" cy="13" r="3" />
                        <circle cx="14.5" cy="5.5" r="1.5" />
                        </svg>
                        <span>JavaScriptによるAjax通信</span>
                    </div>
                    </a>
                </li>
                <li className="py-2">
                    <a className="flex items-center hover:underline" href="/documentation/javascript08">
                    <div className="flex items-center grow">
                        <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.5" cy="4.5" r="4.5" />
                        <circle cx="12" cy="13" r="3" />
                        <circle cx="14.5" cy="5.5" r="1.5" />
                        </svg>
                        <span>JavaScriptのテストフレームワークの使用方法</span>
                    </div>
                    </a>
                </li>
                </ul>
            </nav>
          </div>
      </aside>
      <div className="md:grow">
        <div className="text-lg text-gray-600">
          <h2 className="h2 text-gray-900 mb-4">JavaScriptの基本構文</h2>
          <p className="mb-8">
            JavaScriptの基本構文には、変数、データ型、演算子、制御構造などがあります。
          </p>
          <h3 id="variable" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>1. 変数</h3>
          <p className="mb-8">
            JavaScriptでは、変数を使ってデータを保存します。変数はvar、let、またはconstを使って宣言します。varは古い書き方です、letはブロックスコープで、constは定数です。
          </p>
          <p className="mb-8">
            コードは後日記載。
          </p>
          <h3 id="type" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>2. データ型</h3>
          <p className="mb-8">
            JavaScriptには、プリミティブ型とオブジェクト型の2つのデータ型があります。プリミティブ型には、数値、文字列、ブーリアン、null、undefinedなどがあります。オブジェクト型には、配列、関数、日付などがあります。
          </p>
          <p className="mb-8">
            コードは後日記載。
          </p>
          <h3 id="operator" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>3. 演算子</h3>
          <p className="mb-8">
            JavaScriptには、算術演算子、比較演算子、論理演算子、代入演算子などがあります。例えば、+演算子は加算を行います。==演算子は値の比較を行います。
          </p>
          <p className="mb-8">
            コードは後日記載。
          </p>
          <h3 id="control" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>4. 制御構造</h3>
          <p className="mb-8">
            JavaScriptには、if文、for文、while文、switch文などがあります。これらの構造は、条件に応じて処理を分岐させるために使用します。
          </p>
          <p className="mb-8">
            コードは後日記載。
          </p>
        </div>

        {/* Related content */}
        <div className="mt-8">
          <h3 className="h3 mb-8">関連記事</h3>
          <a className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-white shadow-md hover:shadow-lg mb-4" href="/documentation/javascript02">
            <div>
              <div className="text-normal font-medium mb-1">DOMの概念と操作方法</div>
              <div className="text-sm text-gray-600">次のページ</div>
            </div>
            <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </a>
          <hr className="w-full h-px pt-px bg-gray-200 border-0 mt-8" />
        </div>

        {/* Feedback */}
        <div className="pt-6">
          <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between sm:items-center">
            <button 
              aria-label="Open Modal"
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setIsModalOpen(true)}>
              AIに質問する
            </button>
            {isModalOpen && (
                <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-10">
                    <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full fadeIn" style={{ overflowY: 'auto' }}>
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <section className="flex flex-col gap-3 w-full justify-center items-center">
                            <Text variant="h2" className="text-xl font-bold text-center">AI Chat Bot</Text>
                            <div className="w-full rounded-lg shadow-lg bg-white p-4">
                            <Chat />
                            </div>
                        </section>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                        </span>
                    </div>
                    </div>
                </div>
            )}
            <ul className="inline-flex justify-center -m-2">
              <li className="p-2">
                <a href="#0" title="No, at all">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                    <path d="M11.11 7.029a.334.334 0 00-.395.098c-.006.008-.653.802-2.224 1.23a5.696 5.696 0 01-1.496.212c-.662 0-1.04-.141-1.042-.142a.332.332 0 00-.38.521c.047.058 1.186 1.431 2.75 1.431.234 0 .468-.031.695-.093 1.903-.519 2.273-2.805 2.288-2.903a.333.333 0 00-.197-.354zm7.316 1.436a.335.335 0 00-.393-.106c-.004.002-.422.171-1.158.171-.441 0-.906-.06-1.382-.177-1.58-.388-2.246-1.166-2.252-1.172a.333.333 0 00-.586.27c.018.097.446 2.374 2.36 2.845.207.051.419.077.63.077 1.598 0 2.733-1.44 2.78-1.501a.336.336 0 00.001-.407zM6.666 6.667a.667.667 0 01-.164-1.313c.024-.006 2.395-.64 3.568-2.985a.666.666 0 111.193.596C9.809 5.873 6.949 6.617 6.828 6.647a.678.678 0 01-.163.02zm10.667 0a.672.672 0 01-.161-.02c-.121-.03-2.981-.775-4.435-3.682a.667.667 0 011.193-.597c1.172 2.345 3.543 2.98 3.568 2.985a.668.668 0 01-.165 1.314zM12 19.31c-2.415 0-4.018.281-6 .667-.453.087-1.333 0-1.333-1.334 0-2.666 3.063-6 7.333-6s7.333 3.334 7.333 6c0 1.334-.88 1.422-1.333 1.334-1.982-.386-3.585-.667-6-.667z" fill="#664500" />
                    <path d="M6.667 16.667S8.667 16 12 16s5.333.667 5.333.667S16 14 12 14s-5.333 2.667-5.333 2.667z" fill="#FFF" />
                  </svg>
                </a>
              </li>
              <li className="p-2">
                <a href="#0" title="Not really">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                    <circle fill="#F4F7F9" cx="16.333" cy="9" r="3.667" />
                    <circle fill="#F4F7F9" cx="7.667" cy="9" r="3.667" />
                    <path d="M15.406 15.616c-1.842-.445-5.915-.04-7.441 2.937a.249.249 0 00.222.364c.057 0 .114-.02.161-.058 2.056-1.72 4.957-1.72 6.69-1.72 1.09 0 1.691 0 1.691-.472s-.47-.846-1.323-1.051zM7 8.666a1.662 1.662 0 00.25-3.308A3.627 3.627 0 005.8 5.85c-.287.3-.466.704-.466 1.151 0 .92.746 1.667 1.667 1.667zm8.667 0a1.662 1.662 0 00.25-3.308 3.624 3.624 0 00-1.451.491C14.179 6.15 14 6.553 14 7c0 .92.746 1.667 1.667 1.667z" fill="#65471B" />
                  </svg>
                </a>
              </li>
              <li className="p-2">
                <a href="#0" title="It was useful">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                    <path d="M10.667 11.305a.667.667 0 01-.633-.456c-.135-.399-.679-1.544-1.367-1.544-.708 0-1.259 1.218-1.368 1.544a.666.666 0 11-1.264-.422c.083-.251.869-2.456 2.632-2.456 1.764 0 2.549 2.205 2.633 2.456a.666.666 0 01-.633.878zm6.666 0a.666.666 0 01-.632-.456c-.135-.399-.679-1.544-1.368-1.544-.708 0-1.259 1.218-1.368 1.544a.667.667 0 01-1.265-.422c.084-.251.87-2.456 2.633-2.456 1.762 0 2.548 2.205 2.632 2.456a.666.666 0 01-.632.878zm.89 2.489a.334.334 0 00-.423-.02c-.026.02-2.615 1.934-5.8 1.934-3.177 0-5.775-1.914-5.8-1.933a.333.333 0 00-.486.438c.086.143 2.145 3.495 6.286 3.495s6.2-3.352 6.286-3.495a.333.333 0 00-.063-.419z" fill="#664500" />
                    <path d="M14.153 2.631c0 .16.02.315.054.464.284 1.762 2.243 3.621 3.647 4.132 1.11-.404 2.564-1.651 3.265-3.026A12.018 12.018 0 0015.833.626a2.04 2.04 0 00-1.68 2.005zM9.162 19.385a2.213 2.213 0 00-3.95-1.79 2.21 2.21 0 00-1.799-.925c-.827 0-1.54.46-1.92 1.132a12.047 12.047 0 005.379 5.05c1.091-.901 2.087-2.205 2.29-3.467zm13.705-2.29a1.527 1.527 0 00-2.708-.457 1.532 1.532 0 00-2.737 1.24c.205 1.27 1.566 2.597 2.607 3.04a12.03 12.03 0 002.838-3.823z" fill="#FFAC33" />
                    <path d="M22.417 2.18A2.042 2.042 0 0018.715.991a2.042 2.042 0 00-3.647 1.651c.285 1.762 2.243 3.621 3.647 4.132 1.404-.511 3.363-2.37 3.646-4.131a2.02 2.02 0 00.056-.465zM8.139 18.938a2.213 2.213 0 00-4.011-1.287 2.213 2.213 0 00-3.951 1.79c.307 1.908 2.429 3.922 3.95 4.475 1.522-.552 3.644-2.566 3.951-4.475.039-.163.06-.33.06-.503zm15.826-1.521a1.532 1.532 0 00-2.778-.891 1.532 1.532 0 00-2.737 1.24c.213 1.321 1.683 2.716 2.737 3.099 1.054-.383 2.524-1.778 2.736-3.1.027-.112.042-.228.042-.348z" fill="#DD2E44" />
                  </svg>
                </a>
              </li>
              <li className="p-2">
                <a href="#0" title="Excellent">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                    <path d="M12 14c-2.415 0-4.018-.281-6-.667-.453-.087-1.333 0-1.333 1.334 0 2.666 3.063 6 7.333 6s7.333-3.334 7.333-6c0-1.334-.88-1.422-1.333-1.334-1.982.386-3.585.667-6 .667z" fill="#664500" />
                    <path d="M6 14.667s2 .666 6 .666 6-.666 6-.666-1.333 2.666-6 2.666-6-2.666-6-2.666z" fill="#FFF" />
                    <path d="M10.455 2.942l-3.028.534L5.867.641a.835.835 0 00-1.554.274l-.497 3.198-3.028.534A.834.834 0 00.576 6.22l2.713 1.288-.498 3.208a.835.835 0 001.417.713l2.341-2.374 3.012 1.43a.834.834 0 001.088-1.154L9.083 6.487l2.11-2.139a.834.834 0 00-.738-1.406zm3.09 0l3.028.534 1.56-2.835a.835.835 0 011.554.274l.496 3.198 3.028.534a.834.834 0 01.212 1.573L20.71 7.508l.499 3.208a.835.835 0 01-1.418.713L17.45 9.055l-3.012 1.43a.834.834 0 01-1.087-1.154l1.565-2.844-2.11-2.139a.834.834 0 01.74-1.406z" fill="#E95F28" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <hr className="w-full h-px pt-px bg-gray-200 border-0 mt-6" />
        </div>
      </div>
    </div>
  );
}

export default JavaScriptContent01;