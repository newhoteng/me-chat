import React from 'react';
import Switch from './switch';

interface Props {
  isFutureSelf: boolean;
  setIsFutureSelf: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isFutureSelf, setIsFutureSelf } : Props ) => {
  return (
    <>
      <span>Present-Self</span>
        <Switch isFutureSelf={isFutureSelf} setIsFutureSelf={setIsFutureSelf} />
      <span>Future-Self</span>
    </>
  )
}

export default Header