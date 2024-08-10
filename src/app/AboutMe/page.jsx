import Title from '@/components/modules/Title/Title'
import About from '@/components/template/about/About'
import Skills from '@/components/template/about/Skills'
import React from 'react'
import SkillModel from '@/models/Skill';
import connectToDB from '@/config/db';

export const metadata = {
  title: "DalvandiWeb - AboutMe",
  description: "",
};
async function AboutMe() {
  connectToDB()
  const skills = await SkillModel.find({}).lean()
  return (
   <>
   <About/>
   <Skills skills={JSON.parse(JSON.stringify(skills))}/>
   </>
  )
}

export default AboutMe