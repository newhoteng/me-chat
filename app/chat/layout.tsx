'use client';

import React, { useState } from 'react';
import Header from '../ui/header';
import MessageInput from '../ui/message-input';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [ isFutureSelf, setIsFutureSelf ] = useState<boolean>(false);

  return (
    <main className="relative bg-appbackground h-screen mx-auto px-4 pt-[100px]">
      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-pixel2 text-lg font-medium">
        <Header isFutureSelf={isFutureSelf} setIsFutureSelf={setIsFutureSelf} />
      </header>
      <div className='overflow-auto h-[calc(100vh-182px)] flex flex-col gap-4 pt-2 py-4 border border-red-600'>
        {children}
      </div>
      <div className='border border-blue-700 w-full absolute bottom-0 left-0 p-4'>
        <MessageInput isFutureSelf={isFutureSelf} setIsFutureSelf={setIsFutureSelf} />
      </div>
    </main>
  );
}