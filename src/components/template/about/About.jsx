import Title from '@/components/modules/Title/Title'
import React from 'react'
import { FaPhone } from 'react-icons/fa6';
import { MdCake } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';


function About() {
  return (
    <section className="block mt-16 w-full">
        <div className="block">
            <div className="block">
                <Title title="درباره من"/>
            </div>
            <div className="block mt-8">
                <div className="box">
                    <div className="flex flex-col md:flex-row  gap-8 w-full">
                        <div className="block md:w-[50%]">
                            <p className="block leading-8 ">حدود 2سال است که بابرنامه نویسی آشنا شدم و درحال یادگیر و ارتقا خودم هست. با ری اکت کار میکنم. عاشق چالش های فرانت اند هستم .درکنارتوسعه های پروژه ها دوست دارم دانش ومهارت های خودم درکنار یک تیم قدرتمند ارتقا بدم .</p>
                        </div>
                        <div className="block md:w-[50%]">
                            <ul className="block">
                                <li className="flex items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-2xl text-font-100"><MdCake/></span>
                                        <span className="block text-xl text-font-100 mr-2">تولد :</span>
                                    </div>
                                    <span className="block mr-3 ">1379/08/22</span>
                                </li>
                                <li className="flex items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-2xl text-font-100"><FaPhone/></span>
                                        <span className="block text-xl text-font-100 mr-2">تلفن :</span>
                                    </div>
                                    <Link href='tel:09390944025' rel='nofollow' className='block mr-3 ease-out duration-300 hover:text-font-100'>09390944025</Link>
                                </li>
                                <li className="flex flex-wrap items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-2xl text-font-100"><IoMdMail/></span>
                                        <span className="block text-xl text-font-100 mr-2">ایمیل :</span>
                                    </div>
                                    <Link href='mailto:mhmdmehdidalvandi@gmail.com' rel='nofollow' className='block mr-3 ease-out duration-300 hover:text-font-100'>mhmdmehdidalvandi@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About