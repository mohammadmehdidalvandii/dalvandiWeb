import connectToDB from "@/config/db";
import AvatarModel from "@/models/Avatar";

import {writeFile } from "fs/promises"
import path from "path";

export async function POST(req) {
  try {
    connectToDB();

    const formData = await req.formData();

    console.log("formData => " ,formData)

    const name = formData.get("name");
    const img = formData.get("img")
    const favorite = formData.get("favorite");
    const location = formData.get("location");
    const linkInstagram = formData.get("linkInstagram");
    const linkGithub = formData.get("linkGithub");
    const linkTelegram = formData.get("linkTelegram");
    const linkDin = formData.get("linkDin");


    const buffer = Buffer.from(await img.arrayBuffer());
    const fileName = Date.now() + img.name; 
    const imgPath = path.join(process.cwd(), "public/uploads/" + fileName);

    await writeFile(imgPath , buffer);

    const avatar = await AvatarModel.create({
        name,
        img:`https://dalvandi-web.liara.run/uploads/${fileName}`,
        favorite,
        location,
        linkInstagram,
        linkGithub,
        linkTelegram,
        linkDin,
    });

    return Response.json(
        {message:"Created Avatar is Successfully ✅" , data:avatar},
        {status: 201}
    )


  } catch (err) {
    console.log("Error => " , err)
    return Response.json({ message: "Error Avatar =>", err }, { status: 500 });
  }
}


// Image Uploader
export async function PUT(req) {
    const formData = await req.formData();
    const img = formData.get("img");
  
    // Validation
    if (!img) {
      return Response.json(
        { message: "Product has not image !!" },
        { status: 400 }
      );
    }
}