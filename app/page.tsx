// import Image from 'next/image';
import { RiSendPlaneFill } from "react-icons/ri";
import Switch from './ui/switch';

export default function Home() {
  return (
    <main className="relative bg-appbackground h-screen mx-auto px-4 pt-[100px]">
      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-pixel2 text-lg font-medium">
        <span className="">Present-Self</span>
        <Switch />
        <span>Future-Self</span>
      </header>
      <div className='pt-2 pb-[82px] border border-red-600'>
        <p className="w-3/4 p-2 border bg-leftchatbg">That sounds great. I'd be happy with that.</p>
        <p className="border">Could you send over some pictures of your dog, please?</p>
      </div>
      <form action="" className="w-full absolute bottom-0 left-0 border border-blue-600 p-4">
        <div className="relative rounded-full">
          <input placeholder="Present-Self says ..." type="text" className="h-[50px] w-full rounded-full pl-4 pr-[50px] focus:outline-none placeholder:text-placeholder placeholder:font-light"/>
          <button type="submit" className="absolute top-[7.5px] right-[7.5px] bg-submitbutton w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <RiSendPlaneFill className="text-white text-xl borde border-yellow-50" />
          </button>
        </div>
      </form>
    </main>
  )
}
