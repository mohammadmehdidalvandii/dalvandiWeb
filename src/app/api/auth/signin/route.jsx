import {
     generateAccessToken,
    generateRefreshToken,
    validEmail,
    validPassword,
    verifyPassword
 } from "@/utils/auth";

import UserModel from "@/models/User";
import connectToDB from "@/config/db";

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const{email , password} = body;

        // validations

        const isValidEmail = validEmail(email);
        const isValidPassword = validPassword(password);

        if(!isValidEmail || isValidPassword){
            return Response.json(
                {message:"Email or Password is InValid"},
                {status:419},
            );
        };

        const user = await UserModel.findOne({email});

        if(!user){
            return Response.json(
                {message:"User Not Found "},
                {status:422},
            )
        };

        const isCorrectPasswordWithHash = verifyPassword(password , user.password);

        if(!isCorrectPasswordWithHash){
            return Response.json(
                {message :"Email or Password Is NOT CORRECT"},
                {status:401},
            )
        };

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await UserModel.findOneAndUpdate(
            {email},
            {
                $set:{refreshToken}
            }
        );

        return Response.json(
            {message:"User Logged In Successfully ✅"},
            {
                status:200,
                headers:{
                    "Set-Cookie":`token=${accessToken};path=/;httpOnly=true;`
                },
            }
        );

    }catch(err){
        console.log("Error SignIn ==>" , err);
        return Response.json(
            {message:"Error Server =>" ,err},
            {
                status:500,
            }
        )
    }
}