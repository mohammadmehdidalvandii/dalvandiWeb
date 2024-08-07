import Link from 'next/link'
import React from 'react'

function Card({img , title , onlineLink}) {
  return (
    <div className="block p-4 bg-font-100 rounded-lg text-back">
    <img src={img} alt="work" className="block rounded-md" />
    <div className="block mt-4">
        <h6 className="block font-danaBold text-2xl">{title}</h6>
        <div className="flex items-center gap-8 mt-8">
            <Link href='/' className='flex items-center justify-center bg-back w-[130px] h-12 text-white rounded-lg duration-300 ease-out hover:bg-font-default hover:text-back '>مشاهده جزئیات بیشتر</Link>
            <Link href={`${onlineLink}`} target='_blank' rel="noreferrer" className='flex items-center justify-center bg-back w-[130px] h-12 text-white rounded-lg duration-300 ease-out hover:bg-font-default hover:text-back '>مشاهده آنلاین پروژه</Link>
        </div>
    </div>
</div>
)
}

export default Card