import Link from 'next/link'
import React from 'react'

function TopBar() {
  return (
    <section className="block w-full">
        <div className="flex items-center justify-center gap-6">
            <Link href='/Admin' className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'>پیشخوان</Link>
            <Link href='/Admin/Avatar' className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'>اواتار</Link>
            <Link href='/Admin/AboutMe' className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'>درباه من</Link>
            <Link href='/Admin/WorkMe' className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'>نمونه کار</Link>
            <Link href='/Admin/ContactMe' className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'>تماس با من</Link>
        </div>
    </section>
  )
}

export default TopBar