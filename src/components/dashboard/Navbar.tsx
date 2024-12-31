'use client'

import logo from '../../../public/logo.png'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { theme } = useTheme()

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

        <div className='flex items-center gap-3'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
