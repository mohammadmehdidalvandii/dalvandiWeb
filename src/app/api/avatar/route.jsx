import connectToDB from "@/config/db";
import AvatarModel from '@/models/Avatar';

export async function PUT (req){
    try {
        connectToDB();
        const body = req.json();

        const {
            name,
            favorite,
            location,
            linkInstagram,
            linkGithub,
            linkTelegram,
            linkDin,
        } = body;

        const updateAvatar = await AvatarModel.findByIdAndUpdate(req.params.id, {
            name,
            favorite,
            location,
            linkInstagram,
            linkGithub,
            linkTelegram,
            linkDin,
          }, { new: true });

   return Response.json(
    {message:"Avatar UPDATE is Successfully ✅" , data:updateAvatar},
    {status:200}
   )

    } catch(err){
        console.log("Error put =>" , err)
        return Response.json(
            {message:"Error Avatar => ", err},
            {status:500}
        )
    }
}


// export async function POST (req){
//     try{
//         connectToDB();
//         const body = await req.json();

//         const {
//             name,
//             favorite,
//             location,
//             linkInstagram,
//             linkGithub,
//             linkTelegram,
//             linkDin,
//    } = body;

//    const avatar = await AvatarModel.create({
//             name,
//             favorite,
//             location,
//             linkInstagram,
//             linkGithub,
//             linkTelegram,
//             linkDin,
//    });

//    return Response.json(
//     {message:"Avatar Created successfully ✅"},
//     {status:201}
//    )

//     } catch(err){
//         return Response.json(
//             {message :"Error Avatar =>" ,err},
//             {status:500}
//         )
//     }
// }