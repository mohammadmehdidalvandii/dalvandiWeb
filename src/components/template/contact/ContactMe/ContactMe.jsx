"use client"
import Title from '@/components/modules/Title/Title'
import React, { useState } from 'react'
import { validEmail , validPhone } from '@/utils/auth'
import { showSwal } from '@/utils/helpers'
import { useRouter } from 'next/navigation'

function ContactMe() {
    const router = useRouter();
    const [username , setUserName]= useState("")
    const [phone , setPhone]= useState("")
    const [email , setEmail]= useState("")
    const [request , setRequest]= useState("")

    const handlerSendMessage = async (event)=>{
        event.preventDefault();

        // Validations 
        
        // Send message 

        const message = {username , phone , email , request} ;

        const res  = await fetch("/api/messages",{
            method:"POST",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(message),
        });
        
        const data = await res.json()
   
        if(res.status === 201){
            swal({
                title:"پیام شما با موفقیت ارسال شد",
                icon:"success",
                buttons:"باشه"
            }).then(()=>{
                setUserName("")
                setPhone("")
                setEmail("")
                setRequest("")
            })
        } else if(res.status === 422 || res.status === 419){
            showSwal("اطلاعات وارد شد صحیح نیست","error","تلاش مجدد")
        }

    }


  return (
    <section className="block mb-8 w-full">
        <div className="block">
            <div className="black">
                <Title title="تماس با من"/>
            </div>
            <div className="block mt-8">
                <div className="box xs:w-full sm:w-[400px]">
                    <p className="block my-3 text-font-100">اگر پیامی دارید برام ارسال کنید پروژه درخواست همکاری ممنونم </p>
                    <form action="#" className="block w-full">
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">نام و نام خانوادگی *</span>
                            <input 
                            type="text"
                            value={username}
                            onChange={(event)=>setUserName(event.target.value)} 
                            className="black xs:w-full sm:w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" 
                            placeholder='نام و نام خانوادگی '/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">شماره تلفن *</span>
                            <input 
                            type="text"
                            value={phone}
                            onChange={(event)=>setPhone(event.target.value)} 
                            className="black xs:w-full sm:w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" 
                            placeholder='0912000000'/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">ایمیل *</span>
                            <input 
                            type="text"
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)} 
                            className="black xs:w-full sm:w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" 
                            placeholder='example@.com'/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">درخواست *</span>
                            <textarea 
                            type="text"
                            value={request} 
                            onChange={(event)=>setRequest(event.target.value)}
                            className="black xs:w-full sm:w-[370px] h-48 rounded-md pr-3 pt-3 text-back outline-none border-none" 
                            placeholder='متن شما'/>
                        </div>
                        <button className="btn-primary w-full" onClick={handlerSendMessage}>ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe