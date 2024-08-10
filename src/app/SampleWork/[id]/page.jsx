
import Details from '@/components/template/sampleWork/Details/Details'
import connectToDB from '@/config/db'
import React from 'react'
import ProjectModel from '@/models/Project'

 async function ProjectDetails({params}) {
  connectToDB();
  const projectId = params.id
  const projects = await ProjectModel.find({_id:projectId})
  console.log("project", projects)

  return (
    <>
    <Details projects={JSON.parse(JSON.stringify(projects))}/>
    </>
  )
}

export default ProjectDetails