import React from 'react'

function AdminLayout({children}) {
  return (
    <section className="block w-full">
        <div className="block">
            <div className="block">this is top bar</div>
            <div className="block">
                this is sideBar
                {children}
            </div>
        </div>
    </section>
  )
}

export default AdminLayout