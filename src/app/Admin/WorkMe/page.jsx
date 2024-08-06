import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import WorkDetails from '@/components/template/admin/WorkDetails/WorkDetails'
import ProjectModel from '@/models/Project';


const page = async()=> {
  const projects = await ProjectModel.find({})
  return (
    <AdminLayout>
        <section className="block mt-8">
            <WorkDetails projects={JSON.parse(JSON.stringify(projects))}/>
        </section>
    </AdminLayout>
  )
}

export default page