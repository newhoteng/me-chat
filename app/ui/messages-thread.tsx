'use client';

import React, { useRef, useEffect } from 'react';
import { User, Message } from '../lib/definitions';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import MessageInput from './message-input';
import { useOptimistic } from 'react';

interface Props {
  person: User;
  messages: Message[];
}

const MessagesThread = ({ person, messages } : Props) => {
  const { isfutureself } = person;

  const messagesEndRef = useRef<null | HTMLParagraphElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const [ optmisticMessages, addOptimisticMessage ] = useOptimistic(
    messages, (state, newMessage: Message) => [
      ...state, newMessage
    ]
  )

  useEffect(() => {
    scrollToBottom()
  }, [optmisticMessages]);

  return (
    <div className='h-[calc(100vh-100px)]'>
      <div className='no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 py-4'>
        {optmisticMessages.map((message) => (
          <div
            // className='border border-red-600'
            key={message.id}
            className={`rounded-2xl w-3/4 p-2 ${
              message.owner === 'current' ? "rounded-bl-none text-chatonleft bg-leftchatbg" : "rounded-br-none relative ml-auto text-chatonright bg-white"
            } `}
          >
            <p>
              {message.text}
              {!!message.sending && <small>(Sending)</small>}
            </p>
            <div className='border flex gap-2'>
              <RiDeleteBin6Line />
              <CiEdit />
            </div>
          </div>
        ))}
        <p ref={messagesEndRef}/>
      </div>
      <div className='bg-appbackground w-full absolute bottom-0 left-0 p-4'>
        <MessageInput isFutureSelf={isfutureself} addOptimisticMessage={addOptimisticMessage}/>
      </div>
    </div>
  )
}

export default MessagesThread