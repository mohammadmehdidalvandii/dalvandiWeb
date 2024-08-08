import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import Box from '@/components/template/admin/Box/Box'
import React from 'react'
import MessageModel from '@/models/Messages';
import ProjectModel from "@/models/Project";

async function Admin() {
  const messages = await MessageModel.find({})
  const projects = await ProjectModel.find({})
  return (
    <AdminLayout>
        <div className="flex items-center gap-6  mt-8">
            <Box title='تعداد کل در خواست ها' number={messages.length}/>
            <Box title='تعداد پروژه ها' number={projects.length}/>
        </div>
    </AdminLayout>
  )
}

export default Admin