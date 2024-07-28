import TopBar from '@/components/modules/TopBar/TopBar'
import React from 'react'

function Layout({children}) {
  return (
    <section className="block w-full">
        <div className="block">
            <div className="block">
               <TopBar/>
                {children}
            </div>
        </div>
    </section>
  )
}

export default Layout