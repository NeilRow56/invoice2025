import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { signIn } from '@/utils/auth'

export function SignInButton() {
  return (
    <form
      className=''
      action={async formData => {
        'use server'
        await signIn('resend', formData)
      }}
    >
      <div className='flex flex-col gap-8'>
        <Input type='text' name='email' placeholder='Email' />
        <Button className='w-full' type='submit'>
          Signin to WpAccPac
        </Button>
      </div>
    </form>
  )
}
