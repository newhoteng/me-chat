'use client';

import { togglePersona } from "../lib/actions";

interface Props {
  isFutureSelf: boolean;
  id: string;
}

const Switch = ({ isFutureSelf, id } : Props ) => {

  return (
    <div
      onClick={async () => {
        await togglePersona(isFutureSelf, id)
      }}
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
