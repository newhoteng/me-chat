import React from 'react';
import Switch from './switch';
import type { User } from '@/app/lib/definitions';
import { togglePersona } from '../lib/actions';

interface Props {
  person: User;
  // setIsFutureSelf: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ person } : Props ) => {
  return (
    <>
      <span>Present-Self</span>
        <Switch isFutureSelf={person.isfutureself} id={person.id} />
      <span>Future-Self</span>
    </>
  )
}

export default Header