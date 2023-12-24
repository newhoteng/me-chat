import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";

interface Props {
  isFutureSelf: boolean;
  setIsFutureSelf: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageInput = ({ isFutureSelf, setIsFutureSelf } : Props) => {

  const [ message, setMessage ] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className="relative rounded-full">
          {isFutureSelf ? (
            <input
              name="message"
              placeholder="Future-Self says..."
              type="text"
              className="h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-light"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          ) : (
            <input
              name="message"
              placeholder="Present-Self says..."
              type="text"
              className="h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-light"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          )}
          {message.trim().length !== 0 && (
            <button type="submit" className="absolute top-[7.5px] right-[7.5px] bg-submitbutton w-[35px] h-[35px] rounded-full flex items-center justify-center">
              <RiSendPlaneFill className="text-white text-xl borde border-yellow-50" />
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default MessageInput