import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { createMessage } from '../lib/actions';

interface Props {
  isFutureSelf: boolean;
}

const MessageInput = ({ isFutureSelf } : Props) => {
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
              className="text-wrap h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-light"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          ) : (
            <input
              name="text"
              placeholder="Present-Self says..."
              type="text"
              className="h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-light"
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
                await createMessage(owner, message)
                setMessage('')
              }}
            >
              <RiSendPlaneFill className="text-white text-xl borde border-yellow-50" />
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default MessageInput