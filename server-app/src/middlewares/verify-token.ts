import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const jwtSecret = process.env.JWT_KEY

if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in environment variables')
}

export const verifyToken: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const header = req.headers.authorization
    const token = header?.split(' ')[1]

    if (token) {
        try {
            const { id, email, username } = jwt.verify(token, jwtSecret) as JwtPayload
            req.id = id
            req.email= email
            req.user = username
            next()
        } catch (error: any | undefined) {
            res.status(401).json({ message: "Sin autorización", error: error.message })
        }
    } else {
        res.status(401).json({message: "Sin autorización cabecera sin credenciales"})
    }

    next()
}   