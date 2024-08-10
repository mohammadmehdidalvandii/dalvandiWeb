import connectToDB  from "@/config/db";
import MessageModel from '@/models/Messages';

export async function DELETE (req , {params}){
    try{
        connectToDB();

        const messageID = params.id;

        await MessageModel.findOneAndDelete({
         _id:messageID
        });

        return Response.json(
            {message:"Message Removed Successfully ✅"},
            {status:200}
        )

    } catch(err){

        return Response.json(
            {message:"Error Message =>" , err},
            {status:500}
        )
    }
}