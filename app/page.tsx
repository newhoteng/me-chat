// import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full justify-center items-center rounded-lg bg-lightviolet p-3 md:h-36">
          <h1 className='italic text-2xl text-white'>Welcome To MeChat</h1>
        </div>
        <LoginForm />
        <p className='flex items-center justify-center gap-1'>
          Dont have an account? <Link href='/register' className='text-blue-600'>Register here</Link>
        </p>
      </div>
    </main>
  );
}