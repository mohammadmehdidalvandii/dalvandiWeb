import Title from '@/components/modules/Title/Title'
import Link from 'next/link'
import React from 'react'

function Details() {
  return (
    <section className="block mb-8 w-full">
        <div className="block">
            <div className="block">
                <Title title='جزئیات محصول'/>
            </div>
            <div className="block mt-8">
                <div className="box">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="block">
                            <h6 className="block font-danaBold text-3xl text-font-100">سایت آموزشی Eduport</h6>
                            <p className="block mt-3 leading-8">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                            <div className="block mt-3">
                                <span className="block font-danaBold text-2xl text-white">تکنولوژی ها : </span>
                                <ul className="flex mt-2 gap-2">
                                    <li className="block text-sm bg-primary-100 px-3 py-2">#html</li>
                                    <li className="block text-sm bg-primary-100 px-3 py-2">#css</li>
                                    <li className="block text-sm bg-primary-100 px-3 py-2">#javascript</li>
                                </ul>
                            </div>
                            <div className="block mt-3">
                                <span className="block font-danaBold text-2xl text-white">لینک  ها : </span>
                                <ul className="flex mt-2 gap-2">
                                   <li className="block">
                                    <Link href='/' className='flex items-center justify-center bg-back w-[130px] h-12 text-white rounded-lg duration-300 ease-out hover:bg-font-default hover:text-back'>گیت هاب</Link>
                                   </li>
                                   <li className="block">
                                    <Link href='https://eduport.liara.run' target='_blank' rel="noreferrer" className='flex items-center justify-center bg-back w-[130px] h-12 text-white rounded-lg duration-300 ease-out hover:bg-font-default hover:text-back'>نمایش انلاین</Link>
                                   </li>
                                </ul>
                            </div>

                        </div>
                        <div className="block">
                            <img src="/assets/images/work-1.png" alt="project" className="w-full h-full rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details