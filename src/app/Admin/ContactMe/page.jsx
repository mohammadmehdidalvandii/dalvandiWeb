import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import ContactDetails from '@/components/template/admin/ContactDetails/ContactDetails'
import MessageModel from '@/models/Messages';

async function page() {
  const messages = await MessageModel.find({});
  return (
    <AdminLayout>
        <section className="block mt-8">
            <ContactDetails messages={messages}/>
        </section>
    </AdminLayout>
  )
}

export default page