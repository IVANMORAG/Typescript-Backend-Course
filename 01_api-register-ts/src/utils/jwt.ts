import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const SecretKey = process.env.SECRET_KEY

export const generateToken = (id:String)=>{
    return jwt.sign({id},SecretKey || "", {expiresIn: "30d"})
}

export const verifyToken = (token:string)=>{
    return jwt.verify(token,SecretKey || "")
}