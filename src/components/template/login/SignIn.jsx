"use client"
import { validEmail, validPassword } from '@/utils/auth';
import { showSwal } from '@/utils/helpers';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SignIn() {
    const router = useRouter()
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
   
    const handlerIsLogin = async (event)=>{
        event.preventDefault();
        // Validation Input 
        if(!email.trim() || !password.trim()){
            return showSwal("لطفا ایمیل یا رمز عبور را وارد کنید" , "error" , "تلاش مجدد");
        };


        // const isValidEmail = validEmail(email);
        // const isValidPassword = validPassword(password);

        // if(!isValidEmail){
        //     return showSwal("رمز عبور یا ایمیل ناردست است","error","تلاش مجدد")
        // }
        // if(!isValidPassword){
        //     return showSwal("رمز عبور یا ایمیل ناردست است","error","تلاش مجدد")
        // }



        const user = {email , password};

        const res = await fetch("/api/auth/signin",{
            method :"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(user),
        });

        const data = await res.json();
        if(res.status === 200){
            swal({
                title:"با موفقیت وارد شدید ",
                icon:"success",
                buttons:"ورود به پنل کاربری ",
            }).then(()=>{
                router.replace('/')
            })
        } else if(res.status === 422 || res.status === 401){
            showSwal("کاربری با این اطلاعات وجود ندار","error","تلاش مجدد")
        }else if(res.status === 419 ){
            showSwal("ایمیل یا رمز عبور صحیح نیست","error","تلاش مجدد")
        }
    };



  return (
   <section className="block mb-4   ">
        <div className="block mx-auto w-3/6">
            <div className="box">
                <form action="#" className="block">
                    <input
                     type="text"
                     value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                     className="block w-full h-12 rounded-md mb-4 pr-2 text-back outline-none border-none "
                      placeholder='ایمیل' />
                    <input
                     type="password"
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     className="block w-full h-12 rounded-md pr-2 text-back outline-none border-none " 
                     placeholder='پسورد' />
                    <button className="btn-primary mt-4 w-full" onClick={handlerIsLogin}>ورود</button>
                </form>
            </div>
        </div>
   </section>
  )
}

export default SignIn