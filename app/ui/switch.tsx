'use client'
import React, { useState } from 'react';

// false - present
// true - future

const Switch = ({ isFutureSelf, setIsFutureSelf } ) => {
  // const [isFutureSelf, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsFutureSelf(!isFutureSelf)}
      className={`flex h-6 w-12 cursor-pointer rounded-full p-[2px] ${
        isFutureSelf ? "bg-white justify-end" : "bg-leftchatbg justify-start"
      } duration-300`}
    >
      <div
        className={`h-5 w-5 rounded-full ${
          isFutureSelf ? "bg-chatonright" : "bg-chatonleft"
        }`}>
      </div>
    </div>
  )
}

export default Switch

// text-chatonleft