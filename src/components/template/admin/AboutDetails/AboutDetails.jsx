"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AboutDetails({skills}) {
    const router = useRouter()
  const [name , setName] = useState("");
  const [img , setImg] = useState({});

  const handlerAddSkill = async (e)=>{
    e.preventDefault();

    // validations

    const formData = new FormData();
        
    formData.append("name", name.toUpperCase())
    formData.append("img", img)

    const res =  await fetch("/api/skills",{
        method:"POST",  
        body:formData,
    });

    if(res.status === 201){
        swal({
            title:"مهارد جدید با موفقیت اضافه شد",
            icon:"success",
            buttons:"باشه"
        }).then(()=>{
            setName("")
            setImg({})
            router.refresh();
        })
    }

  }

  return (
    <section className="block">
      <div className="block">
        <div className="box">
          <h6 className="block mb-5 text-xl">ویرایش درباره من</h6>
          <form
            action="#"
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            <textarea
              name=""
              id=""
              className="w-full h-40 rounded-md pt-2 pr-2 text-back outline-none border-none"
              placeholder="درباره خودتان بنویسید"
            ></textarea>
            <div className="block">
              <input
                type="text"
                className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"
                placeholder="تاریخ تولد (1379/08/22)"
              />
              <input
                type="number"
                className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"
                placeholder="تلفن (0939094405)"
              />
              <input
                type="text"
                className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"
                placeholder="ایمیل (mhmdmehdidalvandi@gmail.com)"
              />
            </div>
            <button className="btn-primary w-full col-span-2">تایید</button>
          </form>
        </div>
        <div className="box mt-8">
          <h6 className="block mb-5 text-xl">ویرایش مهارت ها</h6>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="block">
              <input
                type="text"
                value={name}
                onChange={event=>setName(event.target.value)}
                className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"
                placeholder="اسم مهارت مثل (HTML)"
              />
              <span className="block mb-2">ایکون مهارت</span>
              <input
                type="file"
                onChange={event=>setImg(event.target.files[0])}
                className="block w-full h-10 rounded-md text-back mb-4 outline-none border-none"
              />
              <button className="btn-primary w-full" onClick={handlerAddSkill}>تایید</button>
            </div>
            <div className="flex gap-4 flex-wrap h-60 overflow-y-scroll ">
                {skills.map(skill=>(
              <div className="block text-center h-48 w-auto bg-white rounded-md text-back" key={skill._id}>
                <img
                  src={skill.img}
                  alt="skill"
                  className="block w-[96px] h-[96px] mx-auto"
                />
                <span className="block my-4 text-xl">{skill.name}</span>
                <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">
                  حذف
                </button>
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
