"use client"
import Link from 'next/link'
import React from 'react'


 function ContactDetails({messages}) {




  return (
    <section className="block">
        <div className="block">
            <div className="box">
                <h6 className="block mb-4 text-xl">درخواست ها</h6>
                <div className="block">
                    {messages.map(message=>(
                    <div className="flex items-center bg-white text-back justify-between p-2 rounded-sm mb-4" key={message._id}>
                        <div className="block">
                            <span className="block text-lg text-font-default">نام و نام خانوادگی :</span>
                            <span className="block mt-2">{message.username}</span>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default">شماره تلفن :</span>
                            <span className="block mt-2">{"0"+ message.phone}</span>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default"> مشاهده درخواست :</span>
                            <button className='block text-base mt-2 ease-out duration-300 hover:text-green-900' onClick={()=>{
                                swal({
                                    title:["پیام " , message.username],
                                    text:message.request,
                                    buttons:"فهمیدم"
                                })
                            }}>مشاهده</button>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default">   ایمیل :</span>
                            <span className="block mt-2">{ message.email}</span>                        </div>
                        <div className="block">
                        <span className="block text-lg text-font-default">  عملیات :</span>
                            <button className='block text-base mt-2 ease-out duration-300 hover:text-primary-default'>حذف</button>
                        </div>
                    </div>
                    ))}
                    {/* <div className="flex items-center bg-white text-back justify-between p-2 rounded-sm mb-4">
                        <div className="block">
                            <span className="block text-lg text-font-default">نام و نام خانوادگی :</span>
                            <span className="block mt-2">محمدمهدی دالوندی</span>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default">شماره تلفن :</span>
                            <span className="block mt-2">09390944025</span>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default"> مشاهده درخواست :</span>
                            <button className='block text-base mt-2 ease-out duration-300 hover:text-green-900'>مشاهده</button>
                        </div>
                        <div className="block">
                            <span className="block text-lg text-font-default">   ایمیل :</span>
                            <Link href='' className='block text-base mt-2 ease-out duration-300 hover:text-green-900'>ارسال ایمیل</Link>
                        </div>
                        <div className="block">
                        <span className="block text-lg text-font-default">  عملیات :</span>
                            <button className='block text-base mt-2 ease-out duration-300 hover:text-primary-default'>حذف</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails