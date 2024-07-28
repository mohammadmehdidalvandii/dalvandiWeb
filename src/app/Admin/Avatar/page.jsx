import React from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout/AdminLayout'
import AvatarDetails from '@/components/template/admin/AvatarDetails/AvatarDetails'

function page() {
  return (
   <AdminLayout>
     <div className="block mt-8 w-full">
        <AvatarDetails/>
     </div>
   </AdminLayout>
  )
}

export default page