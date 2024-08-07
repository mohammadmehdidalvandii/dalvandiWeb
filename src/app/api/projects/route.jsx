import connectToDB from "@/config/db";
import ProjectModel from "@/models/Project";
import Path from 'path';
import {writeFile } from "fs/promises"


export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const img = formData.get("img");
    const description = formData.get("description");
    const techs = formData.get("techs");
    const github = formData.get("github");
    const onlineLink = formData.get("onlineLink");

    // generate Buffer for img  
    const buffer = Buffer.from(await img.arrayBuffer());
    const fileName = Date.now() + img.name;
    const imgPath = Path.join(process.cwd() , "public/uploads/" + fileName);

    await writeFile(imgPath , buffer);

    const project = await ProjectModel.create({
        title,
        img:`http://localhost:3000/uploads/${fileName}`,
        description,
        techs,
        github,
        onlineLink,
    });

    return Response.json(
        {message : "Created Project is Successfully ✅" , data:project},
        {status:201}
    )

  } catch (err) {
    console.log("error=>>", err);
    return Response.json(
      { message: "Error Projects Server =>", err },
      { status: 500 }
    );
  }
} 

// // Image Uploader
// export async function PUT(req) {
//     const formData = await req.formData();
//     const img = formData.get("img");
  
//     // Validation
//     if (!img) {
//       return Response.json(
//         { message: "Product has not image !!" },
//         { status: 400 }
//       );
//     }
// }