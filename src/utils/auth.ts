import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import Resend from 'next-auth/providers/resend'
import Google from 'next-auth/providers/google'
import db from '@/lib/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: {
    logo: '/logo.png'
  },
  adapter: PrismaAdapter(db) as Adapter,
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role
      return session
    }
  },
  providers: [
    Google,
    Resend({
      from: process.env.EMAIL_FROM
    })
  ]
})
