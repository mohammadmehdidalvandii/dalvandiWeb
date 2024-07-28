import React from 'react'

function AvatarDetails() {
  return (
    <section className="block">
        <div className="box">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="block text-center mx-auto">
                    <img src="/assets/images/user.webp" alt="" className="w-40 h-40 rounded-[50%]" />
                    <div className="flex items-center gap-6 mt-6">
                        <button className="flex items-center text-xl ease-out duration-300 hover:text-primary-default">حذف عکس</button>
                        <button className="flex items-center text-xl ease-out duration-300 hover:text-primary-default">عکس جدید</button>
                    </div>
                </div>
                <div className="block">
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder='تغییر نام (محمدمهدی دالوندی)'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' علاقه مندی (FrontEnd)'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' محل زندگی  (لرستان بروجرد)'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' لینک (اینستاگرام)'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' لینک ( گیت هاب)'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' لینک (تلگرام )'/>
                    <input type="text" className="block w-full h-10 pr-2 rounded-sm outline-none border-none text-back mb-4"  placeholder=' لینک (لینکدین )'/>
                </div>
            </div>
                <button className='btn-primary w-full'>تایید اطلاعات</button>
        </div>
    </section>
  )
}

export default AvatarDetails