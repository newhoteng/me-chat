import React from 'react';
import SignOut from '../ui/signout';
import Header from '../ui/header';
import MessagesThread from '../ui/messages-thread';
import { fetchMessages, getUserInfo } from '../lib/data';
import { User } from '../lib/definitions';

const Page = async () => {

  const person = await getUserInfo();
  const messages = await fetchMessages();

  return (
    <div className="relative h-screen bg-doodle bg-contain mx-auto px-4 pt-[100px]">
      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-pixel2 text-lg font-medium">
        <SignOut />
        <Header person={person!} />
      </header>
      <section>
        <MessagesThread person={person as User} messages={messages} />
      </section>
    </div>
  )
}

// bg-doodle  bg-appbackground

export default Page