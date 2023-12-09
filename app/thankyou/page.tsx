import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-2'> 
        <p className='text-xl font-semibold'>Thank you for registering..</p>
        <Link href='/dashboard' prefetch={false} className='p-3 px-6 border hover:bg-neutral-800 rounded-md'>Dashboard</Link>
    </div>
  )
}

export default page
