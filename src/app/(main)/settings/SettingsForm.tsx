'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'next-auth'
import { useForm } from 'react-hook-form'
import { updateProfile } from './actions'
import { useToast } from '@/hooks/use-toast'
import { updateProfileSchema, UpdateProfileValues } from '@/lib/vakidations'
import { useSession } from 'next-auth/react'

interface SettingsFormProps {
  user: User
}

export default function SettingsForm({ user }: SettingsFormProps) {
  const { toast } = useToast()

  const session = useSession()

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user.name || '' }
  })

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data)
      toast({ description: 'Profile updated.' })
      session.update()
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred. Please try again.'
      })
    }
  }

  return (
    <main className='px-3 py-10'>
      <section className='mx-auto max-w-7xl space-y-6'>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-w-sm space-y-2.5'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter a username' {...field} />
                  </FormControl>
                  <FormDescription>Your public username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={form.formState.isSubmitting}>
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </main>
  )
}
