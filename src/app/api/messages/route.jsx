import connectToDB from "@/config/db";
import MessagesModel from "@/models/Messages";

export async function POST (req){
    try{
        connectToDB();
        const reqBody = await req.json();
        const {
            username,
            phone,
            email,
            request,
        } = reqBody;

        await MessagesModel.create({
            username,
            phone,
            email,
            request,
        });

        return Response.json(
            {message:"Message Send Successfully ✅"},
            {status:201}
        )

    } catch(err){
        console.log("Error messages =>" ,err);
        return Response.json(
            {message:"Error Message server =>" ,err},
            {status:500}
        )
    }
}