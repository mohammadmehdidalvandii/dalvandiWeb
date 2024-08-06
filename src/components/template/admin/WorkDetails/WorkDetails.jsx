"use client"
import { showSwal } from '@/utils/helpers';
import React, { useState } from 'react'
import swal from 'sweetalert';

function WorkDetails() {
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [techs , setTechs] = useState([""]);
    const [github , setGithub] = useState("");
    const [onlineLink , setOnlineLink] = useState("");

    const handlerAddSampleWork = async (e,)=>{
        e.preventDefault();

        // Validations
    
        const project = {
            title,
            description,
            techs,
            github,
            onlineLink,
        };


        const res  = await fetch('/api/projects' , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(project),
        })

        const data =await res.json();

        if(res.status === 201){
            swal({
                title:"با موفقیت پروژه اضافه شد",
                icons:"success",
                buttons:"باشه",
            }).then(()=>{
                setTitle("")
                setDescription("")
                setTechs("")
                setGithub("")
                setOnlineLink("")
            })
        } else if(res.status === 422 || res.status === 419){
            showSwal("اطلاعات به صورت نادرست وارد شده است","error","تلاش مجدد")
        }
    }


  return (
    <section className="block mb-8">
        <div className="block">
            <div className="box">
                <h6 className="block mb-4 text-xl">افزودن نمونه کار</h6>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="block">
                        <div className="block mb-4">
                            <span className="block mb-2 text-lg">اسم پروژه</span>
                            <input 
                            type="text"
                            value={title}
                            onChange={event =>setTitle(event.target.value) }
                            className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                        <div className="block mb-4">
                            <span className="block mb-2 text-lg">توضیحات پروژه</span>
                            <textarea 
                            type="text" 
                            value={description}
                            onChange={event =>setDescription(event.target.value) }
                            className="w-full h-40 rounded-md outline-none border-none text-back pt-2 pr-2" />
                        </div>
                        <div className="block mb-4">
                            <span className="block mb-2 text-lg">(هر تکنولوژی تایید کنید) تکنولوژِی های</span>
                            <input 
                            type="text"
                            value={techs}
                            onChange={event =>setTechs(event.target.value) } 
                            className="w-full h-10 rounded-md outline-none border-none text-back pt-2 pr-2" />
                        </div>
                    </div>
                    <div className="block">
                    <div className="block mb-4">
                            <span className="block mb-2 text-lg">لینک گیت هاب پروژه</span>
                            <input 
                            type="text" 
                            value={github}
                            onChange={event => setGithub(event.target.value)}
                            className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                    <div className="block mb-4">
                            <span className="block mb-2 text-lg">لینک نمایش آنلاین  پروژه</span>
                            <input 
                            type="text" 
                            value={onlineLink}
                            onChange={event => setOnlineLink(event.target.value)}
                            className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                    <div className="block mb-4">
                            <span className="block mb-2 text-lg">فایل پروژه</span>
                            <input type="file" className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                    <div className="block mb-4">
                            <span className="block mb-2 text-lg">عکس پروژه</span>
                            <input type="file" className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                    </div>
                    <button className="btn-primary w-full col-span-2" onClick={handlerAddSampleWork}>افزودن</button>
                </div>
            </div>
            <div className="box mt-8">
                <h6 className="block mb-4 text-xl"> نمونه کار ها</h6>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 h-[500px] overflow-y-scroll gap-6">
                   
                    <div className="block bg-white p-3 rounded-md text-back">
                        <img src="/assets/images/work-1.png" alt="" className="block" />
                        <h6 className="block text-xl my-3">سایت آموزشی Eduport</h6>
                        <div className="flex gap-6">
                            <button className="flex items-center justify-center w-[130px] h-10 bg-green-700 text-white rounded-md ease-out duration-300 hover:bg-green-900">ویرایش</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-back text-white rounded-md ease-out duration-300 hover:bg-success">جزئیات</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-primary-default text-white rounded-md ease-out duration-300 hover:bg-primary-100">حذف</button>
                        </div>
                    </div>
                    <div className="block bg-white p-3 rounded-md text-back">
                        <img src="/assets/images/work-1.png" alt="" className="block" />
                        <h6 className="block text-xl my-3">سایت آموزشی Eduport</h6>
                        <div className="flex gap-6">
                            <button className="flex items-center justify-center w-[130px] h-10 bg-green-700 text-white rounded-md ease-out duration-300 hover:bg-green-900">ویرایش</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-back text-white rounded-md ease-out duration-300 hover:bg-success">جزئیات</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-primary-default text-white rounded-md ease-out duration-300 hover:bg-primary-100">حذف</button>
                        </div>
                    </div>
                    <div className="block bg-white p-3 rounded-md text-back">
                        <img src="/assets/images/work-1.png" alt="" className="block" />
                        <h6 className="block text-xl my-3">سایت آموزشی Eduport</h6>
                        <div className="flex gap-6">
                            <button className="flex items-center justify-center w-[130px] h-10 bg-green-700 text-white rounded-md ease-out duration-300 hover:bg-green-900">ویرایش</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-back text-white rounded-md ease-out duration-300 hover:bg-success">جزئیات</button>
                            <button className="flex items-center justify-center w-[130px] h-10 bg-primary-default text-white rounded-md ease-out duration-300 hover:bg-primary-100">حذف</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkDetails