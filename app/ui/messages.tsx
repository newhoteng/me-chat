import React from 'react';
import { fetchMessages } from '../lib/data';
import { auth } from '@/auth';

const Messages = async () => {

  const userData = await auth();
  console.log(userData);
  // const user_id = userData?.user.id;

  const messages = await fetchMessages();

  return (
    <>
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
    </>
  )
}

export default Messages