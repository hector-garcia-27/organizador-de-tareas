import { z } from 'zod'

// esquemas de validación de zod

export const newUser = z.object({
    username: z.string().min(1,{message:"El nombre es obligatorio"}),
    email: z.string().email({message: "Debe ser un email valido"}),
    password: z.string().min(5,{message:"La contraseña debe tener al menos 5 digitos"})
})

// types

export type INewUser = z.infer<typeof newUser>