// import { JwtPayload } from 'jsonwebtoken';
import { z } from 'zod'

// esquemas de validación de zod

export const newUser = z.object({
    username: z.string().min(1,{message:"El nombre es obligatorio"}),
    email: z.string().email({message: "Debe ser un email valido"}),
    password: z.string().min(5,{message:"La contraseña debe tener al menos 5 digitos"})
})

export const newTask = z.object({
    budget: z.number(),
    description: z.string(), 
    state: z.string(), 
    priority: z.string(), 
    tittle: z.string()
})
// types

export type IJwToken = {
    id: number,
    username: string,
    email: string
}

export type INewUser = z.infer<typeof newUser>

export type IloginUser = Omit<INewUser, "username">

export type ITask = z.infer<typeof newTask>

export type INewTask = ITask & {idUser: number | undefined }

declare module 'express-serve-static-core' { // para agregar estas propiedades personalizadas al tipo definido de express "Request"
    interface Request {
        id?: number;
        email?: string;
        user?: string;
    }
}