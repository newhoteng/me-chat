'use client'
import React, { useState } from 'react';

// false - present
// true - future

const Switch = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`flex h-6 w-12 cursor-pointer rounded-full p-[2px] ${
        toggle ? "bg-white justify-end" : "bg-leftchatbg justify-start"
      } duration-300`}
    >
      <div
        className={`h-5 w-5 rounded-full ${
          toggle ? "bg-chatonright" : "bg-chatonleft"
        }`}>
      </div>
    </div>
  )
}

export default Switch

// text-chatonleft