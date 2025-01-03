import Image from 'next/image'

export const metadata = {
  title: 'Page Not Found'
}

export default function NotFound() {
  return (
    <div className='w-full px-2'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-4 sm:h-screen'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Image
          className='m-0 rounded-xl'
          src='/not-found-1024x1024.png'
          width={350}
          height={350}
          sizes='350px'
          alt='Page Not Found'
          priority={true}
          title='Page Not Found'
        />
      </div>
    </div>
  )
}
