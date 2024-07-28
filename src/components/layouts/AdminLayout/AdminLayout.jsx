import TopBar from '@/components/modules/TopBar/TopBar'
import React from 'react'


function Layout({children}) {
  return (
    <>
    <TopBar/>
    {children}
    </>
  )
}

export default Layout