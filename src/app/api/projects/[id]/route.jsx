import connectToDB from "@/config/db";
import ProjectModel from '@/models/Project';

export async function DELETE (req , {params}){
    try{
        connectToDB();
        const projectID = params.id;

        await ProjectModel.findOneAndDelete({_id:projectID});
        return Response.json(
            {message:"Project Removed Successfully ✅"},
            {status:200},  
        );

    }catch(err){
        return Response.json(
        {message:"Error Delete Project "},
        {status:500}
        );
    }
}