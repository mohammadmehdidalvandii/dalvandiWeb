"use client"
import WorkCard from '@/components/modules/WorkCard/WorkCard';

import React, { useState } from 'react'
import swal from 'sweetalert';


function WorkDetails({projects}) {
    const [title , setTitle] = useState("");
    const [img , setImg] = useState({});
    const [description , setDescription] = useState("");
    const [techs , setTechs] = useState("");
    const [github , setGithub] = useState("");
    const [onlineLink , setOnlineLink] = useState("");


    const handlerAddSampleWork = async (e,)=>{
        e.preventDefault();

        // Validations
    
        const formData = new FormData();

        formData.append("title" , title )
        formData.append("img" ,img )
        formData.append("description" , description)
        formData.append("techs" , techs.split("-"))
        formData.append("github" , github)
        formData.append("onlineLink" , onlineLink )


        const res  = await fetch('/api/projects' , {
            method:"POST",  
            body:formData,
        })

        if(res.status === 201){
            swal({
                title:"با موفقیت پروژه اضافه شد",
                icons:"success",
                buttons:"باشه",
            }).then(()=>{
                location.reload();
            })
        } else if(res.status === 422 || res.status === 419){
            showSwal("اطلاعات به صورت نادرست وارد شده است","error","تلاش مجدد")
        }
    }

    // removed project

    const handlerRemoveProject= (projectID)=>{
        swal({
            title:"آیااز حذف پروژه اطمینان دارید ؟",
            icon:"warning",
            buttons:["نه","آره"]
        }).then(async (result)=>{
            if(result){
                const res = await fetch(`/api/projects/${projectID}`,{
                    method:"DELETE",
                    headers:{"Content-Type":"application/json"},
                })

                if(res.status === 200){
                    swal({
                        title:"پیام با موفقیت حذف گردید",
                        icon:"success",
                        buttons:"فهمیدم"
                    }).then(()=>{
                        location.reload();
                    })
                }
            }
        })
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
                            <span className="block mb-2 text-lg">( هر تکنولوژی با `,` جدا کنید) تکنولوژِی های</span>
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
                            <span className="block mb-2 text-lg">عکس پروژه</span>
                            <input 
                            onChange={event =>setImg(event.target.files[0])}
                            type="file"
                             className="w-full h-10 rounded-md outline-none border-none text-back pr-1" />
                        </div>
                    </div>
                    <button className="btn-primary w-full col-span-2" onClick={handlerAddSampleWork}>افزودن</button>
                </div>
            </div>
            <div className="box mt-8">
                <h6 className="block mb-4 text-xl"> نمونه کار ها</h6>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 h-[500px] overflow-y-scroll gap-6">
                    {projects.map(project=>(
                        <WorkCard key={project._id} {...project}
                        handlerRemoveProject={()=>handlerRemoveProject(project._id)}
                        handlerShowDetails={()=>{
                            swal({
                                text:`${project.description}`,
                                content:{
                                    element:"a",
                                    attributes:{
                                        target:"_blank",
                                        href:project.onlineLink,
                                        text:"نمایش انلاین",
                                        className:"text-primary-default hover:text-secondary"
                                    },
                                },
                                buttons:"باشه"
                            })
                        }
                        }
                        />
                    ))}

                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkDetails