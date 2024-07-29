import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import WorkDetails from '@/components/template/admin/WorkDetails/WorkDetails'

function page() {
  return (
    <AdminLayout>
        <section className="block mt-8">
            <WorkDetails/>
        </section>
    </AdminLayout>
  )
}

export default page