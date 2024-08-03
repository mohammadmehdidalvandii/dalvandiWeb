"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

function TopBar() {
  const [routeMenu , setRouteMenu] = useState('/Admin');
  const pathRoute = usePathname();
  const router = useRouter();
  
  // Logic logoutHandler 
  const logoutHandler = ()=>{
    swal({
      title:"آیا از خروج اطمینان دارید ؟",
      icon:"warning",
      buttons:["نه","آره"]
    }).then(async(result)=>{
      if(result){
        const res  = await fetch('/api/auth/signout',{
          method:"POST",
        });

        if(res.status === 200){
          swal({
            title:"با موفقیت از اکانت خارج شدید",
            icon:"success",
            buttons:"فهمیدم"
          }).then(()=>{
            router.replace('/')
          });
        }
      }
    })
  }


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
            <button className='flex items-center justify-center w-[130px] h-12 bg-white text-back text-2xl rounded-lg ease-out duration-300 hover:bg-success hover:text-white' onClick={logoutHandler}>خروج</button>
        </div>
    </section>
  )
}

export default TopBar