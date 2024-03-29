import React from 'react'
import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

const BalancerWrapper = (props) => <Balancer {...props} />

export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            AI
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
)

const convertNewLines = (text) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

export const ChatLine = ({ who = 'bot', message }) => {
  if (!message) return null

  const formattedMessage = convertNewLines(message)

  return (
    <div
      className={
        who !== 'bot' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
      <BalancerWrapper>
        <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-1 gap-4">
              <p className="font-large text-xxl text-gray-900">
                <a href="#" className="hover:underline">
                  {who === 'bot' ? 'AI' : 'You'}
                </a>
              </p>
              <p
                className={clsx(
                  'text ',
                  who === 'bot' ? 'font-semibold font-' : 'text-gray-400'
                )}
              >
                {formattedMessage}
              </p>
            </div>
          </div>
        </div>
      </BalancerWrapper>
    </div>
  )
}
