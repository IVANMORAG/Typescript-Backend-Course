import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Corrección: split(" ") en lugar de split("")
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) return res.status(401).json({ message: "Token no válido" });

    try {
        const id = verifyToken(token);
        req.body.user = id; // Adjunta el ID del usuario al request
        next(); // Continúa al siguiente middleware/controlador
    } catch (error: any) {
        res.status(401).json({ message: error.message || "Token inválido" });
    }
};