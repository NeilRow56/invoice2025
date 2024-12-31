import logo from '../../../public/logo.png'

import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className='flex w-full items-center shadow-sm'>
      <div className='container mx-auto flex w-full items-center justify-between p-3'>
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src={logo}
              alt='Logo'
              width={35}
              height={35}
              className='rounded-full'
            />
            <span className='text-xl font-bold tracking-tight'>
              Authjs Starter
            </span>
          </Link>
        </div>
        <Link href='/dashboard' className='flex items-center gap-2'>
          <span className='tracking-tight'>Dashboard</span>
        </Link>
        <Link href='/admin' className='flex items-center gap-2'>
          <span className='tracking-tight'>Admin</span>
        </Link>
        <Link href='/settings' className='flex items-center gap-2'>
          <span className='tracking-tight'>Settings</span>
        </Link>
        <div className='flex items-center gap-3'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
