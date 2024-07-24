"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar() {
    const [navMenu , setNavMenu] = useState(false);

    // navbarMenu 
    const handlerNavMenu = ()=>{
        setNavMenu(!navMenu);
    }

  return (
    <section className="block py-4 select-none">
        <div className="container">
            <div className="hidden md:flex items-center justify-between">
                <div className="block">
                    <ul className="flex items-center gap-12">
                        <li className="block ">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white hover:scale-110'>خانه</Link>
                        </li>
                        <li className="block ">
                            <Link href='/AboutMe' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white hover:scale-110'>درباره من</Link>
                        </li>
                        <li className="block ">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white hover:scale-110'>نمونه کار</Link>
                        </li>
                        <li className="block ">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white hover:scale-110'>رزومه</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <Link href='/' className='btn-primary'>تماس با من</Link>
                </div>
            </div>
            {/* Responsive for mobile */}
            <div className="flex md:hidden items-center justify-between relative">
                <span className="block uppercase text-2xl font-semibold text-font-100">dalvandi-web</span>

                {navMenu ? (
                      <span className="flex items-center text-3xl rounded-md text-font-100 cursor-pointer ease-out duration-300 hover:text-primary-default"
                      onClick={handlerNavMenu}
                  >
                      <FaTimes/>
                  </span>
                ):(
                    <span className="flex items-center text-3xl rounded-md text-font-100 cursor-pointer ease-out duration-300 hover:text-primary-default"
                    onClick={handlerNavMenu}
                >
                    <FaBars/>
                </span>
                )}

                {navMenu && (
                <ul className="block bg-success  w-full p-2 absolute top-10 ease-linear">
                <li className="block mb-3">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white'>خانه</Link>
                        </li>
                        <li className="block mb-3">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white'>درباره من</Link>
                        </li>
                        <li className="block mb-3">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white'>نمونه کار</Link>
                        </li>
                        <li className="block mb-3">
                            <Link href='/' className='block font-danaBold text-2xl font-extrabold ease-out duration-300 hover:text-white'>رزومه</Link>
                        </li>
                        <li className="block mb-3">
                        <Link href='/' className='btn-primary'>تماس با من</Link>
                        </li>
                </ul>
                )}
            </div>
        </div>
    </section>
  )
}

export default Navbar