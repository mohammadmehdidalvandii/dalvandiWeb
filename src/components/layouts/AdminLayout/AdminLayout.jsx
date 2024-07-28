import React from 'react'

function Layout({children}) {
  return (
    <section className="block w-full">
        <div className="block">
            <div className="block">
                this is sideBar
                {children}
            </div>
        </div>
    </section>
  )
}

export default Layout