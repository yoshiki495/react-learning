import React, { useState } from 'react'
import { Button } from './Button'
import { ChatLine, LoadingChatLine } from './ChatLine'
import { functions } from '../firebase'

const initialMessages = [
  {
    who: 'bot',
    message: 'Hi! I’m an AI assistant for you. Ask me anything!!',
  },
]

const InputMessage = ({ input, setInput, sendMessage }) => (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          sendMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input)
        setInput('')
      }}
    >
      Say
    </Button>
  </div>
)

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async (message) => {
    setLoading(true)
    const newMessages = [
      ...messages,
      { message, who: 'user' },
    ]
    setMessages(newMessages)
    const last10mesages = newMessages.slice(-10)
    const body = {
      messages: last10mesages,
    }

    // Send request to the backend function
    const sendRequest = async (body) => {
      // Reference to the backend function
      const requestFunction = functions.httpsCallable('handler');
      // Send request with data as the payload
      const response = await requestFunction(body);
      // Return the response from the backend function
      return response;
    };

    // Call the sendRequest function and store the response in the `response` variable
    const response = await sendRequest(body);
    console.log(response)
    const data = response.data

    const botNewMessage = data.text.trim()

    setMessages([
      ...newMessages,
      { message: botNewMessage, who: 'bot' },
    ])
    setLoading(false)
  }

  return (
    <div className="rounded-2xl border-zinc-100  lg:border lg:p-6">
      {messages.map(({ message, who }, index) => (
        <ChatLine key={index} who={who} message={message} />
      ))}

      {loading && <LoadingChatLine />}

      {messages.length < 2 && (
        <span className="mx-auto flex flex-grow text-gray-600 clear-both">
          Type a message to start the conversation
        </span>
      )}
      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  )
}

export default Chat;