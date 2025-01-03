// import { SignInButton } from '@/components/dashboard/SignInButton'
import db from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const users = await db.user.findMany({})
  return (
    <main className='flex flex-col items-center gap-6 px-3 py-10'>
      <h1 className='text-center text-4xl font-bold'>Next-Auth V5 Tutorial</h1>
      <h2 className='text-center text-2xl font-semibold'>Users</h2>
      {/* Display Users */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className='hover:underline'>
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
