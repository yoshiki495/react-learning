import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditorComponent from '../partials/Editor'
import TerminalComponent from '../partials/Terminal';
import { Text } from '@vercel/examples-ui'
import Chat from '../partials/Chat';
import Question from '../partials/Question';

function Card(props) {
  return (
    <div className="border border-gray-300 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full relative" style={{padding: '24px 16px'}}>
      <div className="font-bold text-2xl mb-2 z-10">{props.title}</div>
      {props.content}
    </div>
  );
}

function Trial() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md flex justify-between p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>
          戻る
        </button>
        <button 
              aria-label="Open Modal"
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setIsModalOpen(true)}>
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          次へ
        </button>
      </div>
      <div className="flex h-full px-4 py-4">
        <div className="w-1/4 h-full" data-aos="zoom-y-out">
          <Card title="問題" content={<Question/>} />
        </div>
        <div className="w-5/12 h-full" data-aos="zoom-y-out">
          <Card title="エディタ画面" content={<EditorComponent/>} />
        </div>
        <div className="w-1/3 h-full" data-aos="zoom-y-out">
          <Card title="ターミナル" content={<TerminalComponent/>} />
        </div>
      </div>
    </div>
  );
}

export default Trial;
