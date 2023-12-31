// 'use client';

import { Message } from 'postcss';
import React from 'react';
import { User } from '../lib/definitions';
import { fetchMessages } from '../lib/data';
import MessageInput from './message-input';

interface Props {
  person: User
  // messages: Message[];
}

const MessagesThread = async ({ person } : Props) => {
  const messages = await fetchMessages();

  return (
    <div className='border-2 border-purple-900 h-[calc(100vh-100px)]'>
      <div className='border border-green-600 no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 py-4'>
        {messages.map((message) => (
          <p
            key={message.id}
            className={`rounded-2xl w-3/4 p-2 ${
              message.owner === 'current' ? "rounded-bl-none text-chatonleft bg-leftchatbg" : "rounded-br-none relative ml-auto text-chatonright bg-white"
            } `}
          >
            {message.text}
          </p>
        ))}
      </div>
      {/* <MessageInput /> */}
    </div>
  )
}

{/* <div className='no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 pt-2 py-4'>
        
</div> */}

export default MessagesThread