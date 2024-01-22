import React, { useState } from 'react';
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
// import {  } from "react-icons/ri";
import { createMessage } from '../lib/actions';
import { Message } from '../lib/definitions';

interface Props {
  isFutureSelf: boolean;
  addOptimisticMessage: (action: Message) => void
}

const MessageInput = ({ isFutureSelf, addOptimisticMessage } : Props) => {
  const [ message, setMessage ] = useState<string>('');

  const owner = isFutureSelf ? 'future' : 'current'

  return (
    <>
      <form 
        // action={async () => {
        //   await createMessage(owner, message)
        //   setMessage('')
        // }}
      >
        <div className="relative rounded-full">
          {isFutureSelf ? (
            <input
              name="text"
              placeholder="Future-Self says..."
              type="text"
              className="text-wrap h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          ) : (
            <input
              name="text"
              placeholder="Present-Self says..."
              type="text"
              className="h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          )}
          {message.trim().length !== 0 && (
            <button
              type="submit"
              className="absolute top-[7.5px] right-[7.5px] bg-submitbutton w-[35px] h-[35px] rounded-full flex items-center justify-center"
              onClick={async () => {
                addOptimisticMessage({
                  text: message,
                  owner: owner,
                  sending: true
                });
                setMessage('');
                await createMessage(owner, message);
              }}
            >
              <RiSendPlaneFill className="text-white text-xl" />
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default MessageInput