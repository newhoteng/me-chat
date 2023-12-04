import Image from 'next/image';
import { RiSendPlaneFill } from "react-icons/ri";
import Switch from './ui/switch';

export default function Home() {
  return (
    <main className="relative bg-appbackground h-screen max-w-[500px] mx-auto px-4">
      <header className="sticky top-0 left-0 w-full h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-white font-bold">
        <span className="">Present-Self</span>
        <Switch />
        <span>Future-Self</span>
      </header>
      <div>Hello</div>
      <form action="" className="w-full absolute bottom-0 left-0 border-2 border-blue-600 p-4">
        <div className="relative rounded-full">
          <input placeholder="Present-Self says ..." type="text" className="h-[50px] w-full rounded-full pl-4 pr-[50px]"/>
          <button type="submit" className="absolute top-[7.5px] right-[7.5px] bg-submitbutton w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <RiSendPlaneFill className="text-white text-xl borde border-yellow-50" />
          </button>
        </div>
      </form>
    </main>
  )
}
