'use client'

import logo from '../../../public/logo.png'

import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Button } from '../ui/button'

import UserButton from './UserButton'

import { signIn, useSession } from 'next-auth/react'

export default function Navbar() {
  const session = useSession()
  const user = session.data?.user
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
          {user && <UserButton user={user} />}
          {!user && session.status !== 'loading' && <SignInButton />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>
}
