import TopBar from '@/components/modules/TopBar/TopBar'
import { authUser } from '@/utils/serverHelpers'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'


 async function Layout({children}) {
  const user = await authUser();


  // Get Token user

  const token = cookies().get('token');

  if(!token){
    return redirect('/Login')
  } else if(token){
    if(user.role !== "ADMIN"){
      swal({
        title:"اجازه دسترسی به این صفحه ندارید",
        icon:"error",
        buttons:"باشه"
      }).then(()=>{
      return   redirect('/Login')
      })
    }
  }



  return (
    <>
    <TopBar/>
    {children}
    </>
  )
}

export default Layout