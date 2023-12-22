import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css';
import { signOut } from '@/auth';
import { SessionProvider } from "next-auth/react"
// import SignOut from './ui/signout'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'MeChat',
  description: 'Talk to and decide with your future self',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} border-2 border-red-700 pt-[100px]`}>
        <SessionProvider>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="border border-red-700 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              {/* <PowerIcon className="w-6" /> */}
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
