import connectToDB from "@/config/db";
import SkillModel from "@/models/Skill";
import Path from 'path';
import {writeFile } from "fs/promises"

export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();

    const name = formData.get("name");
    const img = formData.get("img");

    // generate Buffer for img

    const buffer = Buffer.from(await img.arrayBuffer());
    const fileName = Date.now() + img.name;
    const imgPath = Path.join(process.cwd() , "public/uploads/" + fileName);

    await writeFile(imgPath , buffer);

    const skill = await SkillModel.create({
        name,
        img:`https://dalvandi-web.liara.run/uploads/${fileName}`,
    });

    return Response.json( 
        {message:"Created Skill is Successfully ✅" , data:skill},
        {status:201}
    )

  } catch (err) {
    console.log("Error => ", err.message);
    return Response.json(
      { message: "Error Skill Server =>", err },
      { status: 500 }
    );
  }
}
