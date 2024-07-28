import React from 'react'

function Box({title , number}) {
  return (
    <div className="flex items-center justify-center flex-col bg-success w-full h-20 text-white rounded-lg">
        <h6 className="block text-2xl text-font-100">{title}</h6>
        <span className="block mt-2">{number}</span>
    </div>
  )
}

export default Box