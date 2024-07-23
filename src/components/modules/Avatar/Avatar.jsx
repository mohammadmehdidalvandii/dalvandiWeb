import Link from 'next/link'
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";


function Avatar() {
  return (
    <section className="block text-center  bg-success rounded-lg border border-font-100 p-8 text-white">
        <h4 className="block font-danaBlack font-extrabold text-md">محمدمهدی دالوندی</h4>
        <img src="/assets/images/user.webp" alt="" className="block my-4 rounded-xl" />
        <ul className="block text-right">
            <li className="block mb-4">
                <span className="block font-danaBold text-xl text-font-100">علاقه :</span>
                <span className="block mt-2 text-lg">Front-End Developer</span>
            </li>
            <li className="block">
                <span className="block font-danaBold text-xl text-font-100">محل زندگی :</span>
                <span className="block mt-2 text-lg">ایران - لرستان - بروجرد</span>
            </li>
        </ul>
        <ul className="flex items-center justify-center mt-6 gap-8">
            <li className="block">
                <Link href='/' className='flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-primary-default'>
                    <BsInstagram/>
                </Link>
            </li>
            <li className="block">
                <Link href='/' className='flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-back'>
                    <FaGithub/>
                </Link>
            </li>
            <li className="block">
                <Link href='/' className='flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-white hover:text-blue-700'> 
                    <FaTelegram/>
                </Link>
            </li>
            <li className="block">
                <Link href='/' className='flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-white hover:text-blue-700'>
                    <FaLinkedin/>
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Avatar