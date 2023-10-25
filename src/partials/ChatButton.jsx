import React, { useState } from "react";
import * as te from 'tw-elements';

const ChatButton = () => {
  return (
    <>
      <button
        type="button"
        data-te-toggle="modal"
        data-te-target="#rightBottomModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="inline-block rounded-full bg-info p-6 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        お困りですか？
      </button>
    </>
  );
};

export default ChatButton;
