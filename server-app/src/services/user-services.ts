import { pool } from "../../database/database"
import { INewUser } from "../../types"


export const findUserByEmail = async (email: string) => {
    try {
        const query = "SELECT * FROM users WHERE email = $1;"
        const values = [email]
        const { rows, rowCount } = await pool.query(query, values)
        if (!rowCount) {
            return { ok: false, message: "El Email no esta registrado" }
        } else {
            return { ok: true, message: "El Email ya esta registrado", user: rows[0] }
        }
    } catch (error) {
        return { ok: false, error }
    }
}


export const createNewUser = async ({ username, email, password }: INewUser) => {
    try {
        const query = "INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING *;"
        const values = [username, email, password]
        const { rows, rowCount } = await pool.query(query, values)
        if (!rowCount) {
            return { ok: false, message: "No se pudo crear el usuario" }
        } else {
            return { ok: true, message: "usuario creado con exito", user: rows[0] }
        }
    } catch (error) {
        return { ok: false, error }
    }

}