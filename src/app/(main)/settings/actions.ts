'use server'

import db from '@/lib/db'
import { updateProfileSchema, UpdateProfileValues } from '@/lib/vakidations'
import { auth } from '@/utils/auth'
import { revalidatePath } from 'next/cache'

// To learn more about server actions, watch my YT tutorial: https://www.youtube.com/watch?v=XD5FpbVpWzk

export async function updateProfile(values: UpdateProfileValues) {
  //Get the currently authenticated user
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    throw new Error('Unauthenticated')
  }

  const { name } = updateProfileSchema.parse(values)

  // Update user

  await db.user.update({
    where: {
      id: userId
    },
    data: {
      name: name
    }
  })

  revalidatePath('/')
}
