import React from 'react'
import { FaStar } from 'react-icons/fa'

function Title({title}) {
  return (
            <div className="inline-flex items-center border border-font-100 p-3 rounded-lg">
                <span className="text-2xl"><FaStar/></span>
                <span className="block font-danaBold text-2xl mr-3">{title}</span>
            </div>
  )
}

export default Title