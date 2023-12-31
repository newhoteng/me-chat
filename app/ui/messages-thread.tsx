import { Message } from 'postcss';
import React from 'react';
import { User } from '../lib/definitions';

interface Props {
  person: User
  // messages: Message[];
  // setIsFutureSelf: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessagesThread = ({person} : Props) => {
  return (
    <div>MessagesThread</div>
  )
}

export default MessagesThread