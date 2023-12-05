'use client'
import React, { useState } from 'react';

export const Switch2 = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  )
}

const Switch = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`flex h-6 w-12 cursor-pointer rounded-full p-[2px] ${
        toggle ? "bg-lightmagenta justify-end" : "bg-lightviolet justify-start"
      } duration-300`}
    >
      <div
        className={`h-5 w-5 rounded-full ${
          toggle ? "bg-appbackground" : "bg-appbackground"
        }`}>
      </div>
    </div>
  )
}

export default Switch