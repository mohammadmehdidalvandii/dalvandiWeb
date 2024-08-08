import React from 'react'
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import AboutDetails from '@/components/template/admin/AboutDetails/AboutDetails'
import SkillModel from '@/models/Skill';

 async function page() {
const skills = await SkillModel.find({});

  return (
    <AdminLayout>
        <section className="block mt-8">
            <AboutDetails skills={skills}/>
        </section>
    </AdminLayout>
  )
}

export default page