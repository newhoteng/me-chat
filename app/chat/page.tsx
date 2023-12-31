import React from 'react';
import SignOut from '../ui/signout';
import Messages from '../ui/messages';
import Header from '../ui/header';
import MessagesThread from '../ui/messages-thread';
import { fetchMessages, getUserInfo } from '../lib/data';
import { auth } from '@/auth';

// const Messages = async () => {

//   const messages = await fetchMessages();

const Page = async () => {

  const userData = await auth();
  const id = userData?.user.id;

  const person = await getUserInfo(id);

  // const messages = fetchMessages;
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-pixel2 text-lg font-medium">
        <Header person={person!} />
      </header>
      <section>
        <MessagesThread person={person!}/>
      </section>
      {/* <SignOut />
      <Messages /> */}
    </>
  )
}

export default Page