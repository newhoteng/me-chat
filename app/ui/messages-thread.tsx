'use client';

import React from 'react';
import { User, Message } from '../lib/definitions';
import MessageInput from './message-input';
import { useOptimistic } from 'react';

interface Props {
  person: User;
  messages: Message[];
}

const MessagesThread = ({ person, messages } : Props) => {
  const { isfutureself } = person;

  const [ optmisticMessages, addOptimisticMessage ] = useOptimistic(
    messages, (state, newMessage: Message) => [
      ...state, newMessage
    ]
  )

  return (
    <div className='relative borde border-purple-900 h-[calc(100vh-100px)]'>
      <div className='border border-green-600 no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 py-4'>
        {optmisticMessages.map((message) => (
          <p
            key={message.id}
            className={`rounded-2xl w-3/4 p-2 ${
              message.owner === 'current' ? "rounded-bl-none text-chatonleft bg-leftchatbg" : "rounded-br-none relative ml-auto text-chatonright bg-white"
            } `}
          >
            {message.text}
            {!!message.sending && <small>(Sending)</small>}
          </p>
        ))}
      </div>
      <div className='border border-yellow-600 w-full absolute bottom-0 left-0 py-4'>
        <MessageInput isFutureSelf={isfutureself} addOptimisticMessage={addOptimisticMessage}/>
      </div>
    </div>
  )
}

{/* <div className='no-scrollbar overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 pt-2 py-4'>
        
</div> */}

export default MessagesThread