import React from 'react';
import { fetchMessages } from '../lib/data';

const Messages = async () => {
  // const email = 'harriet.oteng@yahoo.com'

  const user_id = '410544b2-4001-4271-9855-fec4b6a6442a'
  const messages = await fetchMessages(user_id);

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

// className={`h-5 w-5 rounded-full ${
//   isFutureSelf ? "bg-chatonright" : "bg-chatonleft"
// }`}>

// <p className="rounded-2xl rounded-br-none w-3/4 p-2 relative ml-auto text-chatonright bg-white">Could you send over some pictures of your dog, please?</p>

export default Messages