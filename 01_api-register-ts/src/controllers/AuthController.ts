import { Request,Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";

const authService = new AuthService(new UserRepository())

export class AuthController{
    static async register(req:Request,res:Response){
        try{
            const token = await authService.register(req.body)
            res.json({token});
        }catch(error:any){
            res.status(400).json({message: error.message || "Los datos no fueron validos."})
        }
    }

    static async login(req:Request, res:Response){
        try{
            const token = await authService.login(req.body); //email,pasword
            res.json({token});
        } catch (error:any){
            res.status(400).json({message: error.message || "Credenciales no validas."})
        }
    }

    static async getAllEmails(req: Request, res: Response) {
        try {
            const emails = await authService.getAllEmails();
            res.json(emails);
        } catch (error: any) {
            res.status(500).json({ message: error.message || "Error al obtener los emails." });
        }
    }

}