import React from 'react'

function SignIn() {
  return (
   <section className="block mb-4   ">
        <div className="block mx-auto w-3/6">
            <div className="box">
                <form action="#" className="block">
                    <input type="text" className="block w-full h-12 rounded-md mb-4 pr-2 text-back outline-none border-none " placeholder='ایمیل' />
                    <input type="password" className="block w-full h-12 rounded-md      pr-2 text-back outline-none border-none " placeholder='پسورد' />
                    <button className="btn-primary mt-4 w-full">ورود</button>
                </form>
            </div>
        </div>
   </section>
  )
}

export default SignIn