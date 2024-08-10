"use client"
import Link from 'next/link'
import React from 'react'


 function ContactDetails({messages}) {


const handlerRemove = (messageID)=>{
    swal({
        title:"آیا از حذف پیام اطمینان دارید ؟",
        icon:"warning",
        buttons:["نه","آره"]
    }).then(async(result)=>{
        if(result){
            const res = await fetch(`/api/messages/${messageID}`,{
                method:"DELETE",
                headers:{"Content-Type": "application/json"}
            });

            console.log("response =>" , res )

            if(res.status === 200){
                swal({
                    title:"پیام با موفقیت حذف گردید",
                    icon:"success",
                    buttons:"فهمیدم"
                }).then(()=>{
                    location.reload();
                });
            }
        }
    })
}

  return (
    <section className="block">
        <div className="block">
            <div className="box">
                <h6 className="block mb-4 text-xl">درخواست ها</h6>
                <div className="block">
                    {messages.length > 0 ? (
                        messages.map(message=>(
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
                                    <button className='block text-base mt-2 ease-out duration-300 hover:text-primary-default' onClick={()=>handlerRemove(message._id)}>حذف</button>
                                </div>
                            </div>
                            ))
                    ):(
                    <span className='block text-center text-2xl text-primary-default'>هیچ پیامی وجود ندارد</span>
                    )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails