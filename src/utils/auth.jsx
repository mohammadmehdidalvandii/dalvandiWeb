import { hash , compare } from "bcryptjs";
import { sign , verify } from "jsonwebtoken";

// Logic Hash Password 
const hashPassword = async (Password)=>{
    const hashedPassword = await hash(Password , 12);
    return hashedPassword
}

// Logic Verify Password 
const verifyPassword = async (Password , hashedPassword)=>{
    const isValid  = await compare(Password , hashedPassword);
    return isValid;
}

// Logic Created Access Token 
const generateAccessToken = (data)=>{
    const token = sign({...data}, process.env.ACCESS_TOKEN_SC , {
        expiresIn : "60d",
    });
    return token
}

// Logic Verify Access Token 
const verifyAccessToken = (token)=>{
    try{
        const tokenPayload = verify(token , process.env.ACCESS_TOKEN_SC);
        return tokenPayload;
    } catch (err){
        console.log("Verify Access Token Error => ", err);
        return false
    }
}

// Logic Created Refresh Token 
const generateRefreshToken = (data)=>{
    const token = sign({...data}, process.env.REFRESH_TOKEN_SC , {
        expiresIn:"15d",
    });
    return token;
}

// Logic Validation Email
const validEmail = (email)=>{
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
}

// Logic Validation Phone
const validPhone = (phone)=>{
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone);
}

// Logic Validation Email
const validPassword = (Password)=>{
    const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validEmail,
    validPassword,
    validPhone,
};