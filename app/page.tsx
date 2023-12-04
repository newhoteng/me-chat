import Image from 'next/image';
import Switch from './ui/switch';

export default function Home() {
  return (
    <main className="relative border-2 border-green-600 h-screen max-w-[500px] mx-auto">
      <header className="h-[100px] flex items-center justify-center gap-6 bg-gradient-to-r from-lightviolet to-lightmagenta text-white font-bold">
        <span className="">Present-Self</span>
        <Switch />
        <span>Future-Self</span>
      </header>
      <form action="" className="w-full absolute bottom-0 left-0 border-2 border-blue-600">
        <input placeholder="Current self says what?" type="text" className="border-2 border-red-600"/>
        <button>send icon</button>
      </form>
    </main>
  )
}
