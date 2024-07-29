import React from 'react'

function AboutDetails() {
  return (
    <section className="block">
        <div className="block">
            <div className="box">
                <h6 className="block mb-5 text-xl">ویرایش درباره من</h6>
                <form action="#" className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <textarea name="" id="" className='w-full h-40 rounded-md pt-2 pr-2 text-back outline-none border-none' placeholder='درباره خودتان بنویسید'></textarea>
                    <div className="block">
                        <input type="text" className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"  placeholder='تاریخ تولد (1379/08/22)'/>
                        <input type="number" className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"  placeholder='تلفن (0939094405)'/>
                        <input type="text" className="block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none"  placeholder='ایمیل (mhmdmehdidalvandi@gmail.com)'/>
                    </div>
                    <button className='btn-primary w-full col-span-2'>تایید</button>
                </form>
            </div>
            <div className="box mt-8">
            <h6 className="block mb-5 text-xl">ویرایش مهارت ها</h6>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="block">
                        <input type="text" className='block w-full h-10 rounded-md pr-2 text-back mb-4 outline-none border-none' placeholder='اسم مهارت مثل (HTML)'/>
                        <span className="block mb-2">ایکون مهارت</span>
                        <input type="file" className='block w-full h-10 rounded-md text-back mb-4 outline-none border-none'/>
                        <button className='btn-primary w-full'>تایید</button>
                    </div>
                    <div className="flex gap-4 flex-wrap h-60 overflow-y-scroll ">
                        <div className="block text-center bg-white rounded-md text-back">
                            <img src="/assets/images/html.avif" alt="skill" className="block" />
                            <span className="block my-4 text-xl">html</span>
                             <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">حذف</button>
                        </div>
                        <div className="block text-center bg-white rounded-md text-back">
                            <img src="/assets/images/html.avif" alt="skill" className="block" />
                            <span className="block my-4 text-xl">html</span>
                             <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">حذف</button>
                        </div>
                        <div className="block text-center bg-white rounded-md text-back">
                            <img src="/assets/images/html.avif" alt="skill" className="block" />
                            <span className="block my-4 text-xl">html</span>
                             <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">حذف</button>
                        </div>
                        <div className="block text-center bg-white rounded-md text-back">
                            <img src="/assets/images/html.avif" alt="skill" className="block" />
                            <span className="block my-4 text-xl">html</span>
                             <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">حذف</button>
                        </div>
                        <div className="block text-center bg-white rounded-md text-back">
                            <img src="/assets/images/html.avif" alt="skill" className="block" />
                            <span className="block my-4 text-xl">html</span>
                             <button className="block text-center mx-auto text-lg ease-out duration-300 hover:text-primary-default">حذف</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutDetails