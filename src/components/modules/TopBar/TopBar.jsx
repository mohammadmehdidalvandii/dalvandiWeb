"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function TopBar() {
  const [routeMenu , setRouteMenu] = useState('/Admin');
  const pathRoute = usePathname();

  // change Route Menu Link
  useEffect(()=>{
    const pathName = pathRoute;
    setRouteMenu(pathName)
  },[pathRoute])

  return (
    <section className="block w-full">
        <div className="flex items-center justify-center gap-6">
            <Link href='/Admin' className={routeMenu === '/Admin' ? "flex items-center justify-center w-[130px] h-12 bg-success text-white text-2xl rounded-lg" :'flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'}>پیشخوان</Link>
            <Link href='/Admin/Avatar' className={routeMenu === '/Admin/Avatar' ? "flex items-center justify-center w-[130px] h-12 bg-success text-white text-2xl rounded-lg" :'flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'}>اواتار</Link>
            <Link href='/Admin/AboutMe' className={routeMenu === '/Admin/AboutMe' ? "flex items-center justify-center w-[130px] h-12 bg-success text-white text-2xl rounded-lg" :'flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'}>درباه من</Link>
            <Link href='/Admin/WorkMe' className={routeMenu === '/Admin/WorkMe' ? "flex items-center justify-center w-[130px] h-12 bg-success text-white text-2xl rounded-lg" :'flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'}>نمونه کار</Link>
            <Link href='/Admin/ContactMe' className={routeMenu === '/Admin/ContactMe' ? "flex items-center justify-center w-[130px] h-12 bg-success text-white text-2xl rounded-lg" :'flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white'}>تماس با من</Link>
        </div>
    </section>
  )
}

export default TopBar