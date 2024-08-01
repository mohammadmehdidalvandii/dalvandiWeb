import connectToDB from "@/config/db";
import ProjectModel from '@/models/Project';

export async function POST (req) {
    try{
        connectToDB();
        const body = await req.json();
        const {
            title,
            description,
            techs,
            github,
            onlineLink,
        } = body;

        const project = await  ProjectModel.create({
            title,
            description,
            techs,
            github,
            onlineLink,
        });

        return Response.json(
            {message :"Project Created Successfully ✅" , data:project},
            {status:"201"}
        )

    } catch(err){
    console.log("error=>>" ,err)
        return Response.json(
            {message:"Error Projects Server =>" , err},
            {status:500}
        );
    }
}