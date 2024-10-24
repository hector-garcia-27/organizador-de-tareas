import { Request, Response } from "express"
import { IloginUser, INewUser, newUser } from "../../types"
import { findUserByEmail, createNewUser } from "../services/user-services"
import bcryptjs from 'bcryptjs'
import { TokenGenerate } from "../services/jwt-services"


export const register = async (req: Request, res: Response) => {
    const user: INewUser = req.body
    const findUser = await findUserByEmail(user.email) // comprueba que el email no este registrado
    if (findUser.ok === true) {
        res.status(403).json({ ok: false, message: "El Email ya esta registrado", user: findUser.user })
    } else {
        const userValidate = newUser.safeParse(user) //valida los datos de entrada con el esquema de zod, 
        // userValidate entrega 2 propiedades; Success y data | success y error
        if (userValidate.success === true) {
            const { username, email, password } = userValidate.data // obtiene los datos desde la validación

            // encryptado de la contraseña
            const salt = await bcryptjs.genSalt(10)
            const encryptedPassword = await bcryptjs.hash(password, salt)
            // creación del usuario
            const newUser = await createNewUser({ username, email, password: encryptedPassword })
            if (newUser.ok === true) {
                res.status(201).json({ ok: true, message: newUser.message, user: newUser.user })
            } else {
                res.status(501).json({ ok: false, message: newUser.message })
            }
        } else if (userValidate.success === false) {
            res.status(400).json({ ok: false, message: "Los datos entregados no cumplen con el formato necesario" })
        }
    }
}

export const login = async (req: Request<IloginUser>, res: Response) => {

    const { email, password } = req.body

    const { user, ok } = await findUserByEmail(email)
    if (ok === false) {
        res.status(404).json({ ok: false, message: "El usuario no existe" })
    } else if (ok === true) {
        const verifyPassword = await bcryptjs.compare(password, user.password)
        if (verifyPassword) {
            const token = TokenGenerate(user)
            res.status(200).json({ ok: true, token })
        } else {
            res.status(401).json({ ok: false, message: "La contraseña es incorrecta" })
        }
    }
}