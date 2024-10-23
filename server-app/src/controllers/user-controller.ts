import { Request, Response } from "express"
import { INewUser, newUser } from "../../types"
import bcryptjs from 'bcryptjs'

// prueba
const findUserByEmail = async () => {

    return false
}

const createNewUser = async ({ username, email, password: encryptedPassword }: INewUser) => {

    return { username, email, encryptedPassword }
}
// 


export const register = async (req: Request, res: Response) => {
    const user: INewUser = req.body
    const findUser = await findUserByEmail(/* user.email */)
    if (findUser) {
        res.status(400).json({ ok: false, message: "El usuario ya existe en la base de datos" })
    } else {
        const userValidate = newUser.safeParse(user)
        if (userValidate.success === true) {
            const { username, email, password } = userValidate.data

            const salt = await bcryptjs.genSalt(10)
            const encryptedPassword = await bcryptjs.hash(password, salt)

            const newUser = await createNewUser({ username, email, password: encryptedPassword })
            res.status(400).json({ ok: true, message: "Usuario creado con exito", newUser })
        }
    }

}