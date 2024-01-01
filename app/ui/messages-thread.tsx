'use client';

import { Message } from 'postcss';
import React from 'react';
import { User } from '../lib/definitions';
// import Result from 'postcss/lib/result';
// import { fetchMessages } from '../lib/data';
import MessageInput from './message-input';

interface Props {
  person: User
  messages: Message[];
}

const MessagesThread = ({ person, messages } : Props) => {
  // const messages = await fetchMessages();

  return (
    <div className='relative borde border-purple-900 h-[calc(100vh-100px)]'>
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
      <div className='border border-yellow-600 w-full absolute bottom-0 left-0 py-4'>
        <MessageInput isFutureSelf={person.isfutureself}/>
      </div>
    </div>
  )
}

{/* <div className='no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 pt-2 py-4'>
        
</div> */}

export default MessagesThread