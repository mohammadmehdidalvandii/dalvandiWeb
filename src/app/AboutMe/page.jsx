import Title from '@/components/modules/Title/Title'
import About from '@/components/template/about/About'
import Skills from '@/components/template/about/Skills'
import React from 'react'


export const metadata = {
  title: "DalvandiWeb - AboutMe",
  description: "",
};
function AboutMe() {
  return (
   <>
   <About/>
   <Skills/>
   </>
  )
}

export default AboutMe