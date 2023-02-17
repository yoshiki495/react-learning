import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditorComponent from '../partials/Editor'
import TerminalComponent from '../partials/Terminal';

function Card(props) {
  return (
    <div className="border border-gray-300 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full relative" style={{padding: '24px 16px'}}>
      <div className="font-bold text-2xl mb-2 z-10">{props.title}</div>
      {props.content}
    </div>
  );
}

function Trial() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md flex justify-between p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>
          戻る
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          次へ
        </button>
      </div>
      <div className="flex h-full px-4 py-4">
        <div className="w-1/4 h-full" data-aos="zoom-y-out">
          <Card title="問題"/>
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
