import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import AboutDetails from '@/components/template/admin/AboutDetails/AboutDetails'

function page() {
  return (
    <AdminLayout>
        <section className="block mt-8">
            <AboutDetails/>
        </section>
    </AdminLayout>
  )
}

export default page