import { Metadata } from 'next'

import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'
import SettingsForm from './SettingsForm'

export const metadata: Metadata = {
  title: 'Settings'
}

export default async function Settings() {
  // Protect this page via authentication
  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/settings')
  }
  return <SettingsForm user={user} />
}
