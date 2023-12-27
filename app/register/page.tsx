import RegisterForm from '@/app/ui/register-form';
import Link from 'next/link';
 
export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full justify-center items-center rounded-lg bg-lightviolet p-3 md:h-36">
          <h1 className='italic text-2xl text-white'>Welcome To MeChat</h1>
        </div>
        <RegisterForm />
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          {/* <Button type="submit">Create Invoice</Button> */}
        </div>
        {/* <p className='flex items-center justify-center gap-1'>
          Dont have an account? <Link href='/register' className='text-blue-600'>Register here</Link>
        </p> */}
      </div>
    </main>
  );
}