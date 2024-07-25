import Card from '@/components/modules/Card/Card'
import Title from '@/components/modules/Title/Title'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Work() {
  return (
    <section className="block w-full">
        <div className="block">
            <div className="block">
                <Title title="نمونه کار ها"/>
            </div>
            <div className="block mt-8">
                <div className="box">
                    <div className="flex items-center">
                        <input type="text" className="block w-max h-12 rounded-md text-black pr-1 outline-none border-none " placeholder='جستجو ' />
                        <span className="btn-primary w-16 mr-2 cursor-pointer">
                            <FaSearch/>
                        </span>
                    </div>
                    <div className="grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                     <Card/>
                     <Card/>
                     <Card/>
                    </div>
                    <button className="btn-primary mt-12 mx-auto">مشاهده بیشتر</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work