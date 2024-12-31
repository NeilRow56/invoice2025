import Navbar from '@/components/dashboard/Navbar'
import { SignInButton } from '@/components/dashboard/SignInButton'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='flex w-full items-center justify-between gap-2'>
        <Navbar />
        {/* <SignInButton /> */}
      </div>

      {children}
    </div>
  )
}
