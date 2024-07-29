import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import ContactDetails from '@/components/template/admin/ContactDetails/ContactDetails'

function page() {
  return (
    <AdminLayout>
        <section className="block mt-8">
            <ContactDetails/>
        </section>
    </AdminLayout>
  )
}

export default page