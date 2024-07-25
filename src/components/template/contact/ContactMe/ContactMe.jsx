import Title from '@/components/modules/Title/Title'
import React from 'react'

function ContactMe() {
  return (
    <section className="block mb-8 w-full">
        <div className="block">
            <div className="black">
                <Title title="تماس با من"/>
            </div>
            <div className="block mt-8">
                <div className="box w-[400px]">
                    <p className="block my-3 text-font-100">اگر پیامی دارید برام ارسال کنید پروژه درخواست همکاری ممنونم </p>
                    <form action="#" className="block w-full">
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">نام و نام خانوادگی *</span>
                            <input type="text" className="black w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" placeholder='نام و نام خانوادگی '/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">شماره تلفن *</span>
                            <input type="text" className="black w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" placeholder='0912000000'/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">ایمیل *</span>
                            <input type="text" className="black w-[370px] h-12 rounded-md pr-3 text-back outline-none border-none" placeholder='example@.com'/>
                        </div>
                        <div className="block mb-3">
                            <span className="block text-font-100 text-lg mb-2">درخواست *</span>
                            <textarea type="text" className="black w-[370px] h-48 rounded-md pr-3 pt-3 text-back outline-none border-none" placeholder='متن شما'/>
                        </div>
                        <button className="btn-primary w-full">ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe