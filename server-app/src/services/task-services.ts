import { pool } from "../../database/database";
import { INewTask } from "../../types";

export const createNewTask = async ({ idUser, budget, description, state, priority, tittle }: INewTask) => {
    try {
        const query = "INSERT INTO  task (iduser, budget, description, state, priority, tittle) VALUES  ($1, $2, $3, $4, $5, $6) RETURNING*;"
        const values = [idUser, budget, description, state, priority, tittle]
        const { rows, rowCount } = await pool.query(query, values)
        if (!rowCount) {
            return { ok: false, message: "no se pudo agregar la tarea" }
        } else {
            return { ok: true, message: "Tarea agregada", task: rows[0] }
        }
    } catch (error) {
        return { ok: false, error }
    }
}

export const getTaskList = async (id: number | undefined) => {
    try {
        const query = "SELECT * FROM task WHERE iduser = $1;"
        const values = [id]
        const { rows, rowCount } = await pool.query(query, values)
        if (!rowCount) {
            return { ok: false, message: "El usuario no tiene tareas añadidas" }
        }
        if (rowCount) {
            return { ok: true, message: "Lista de tareas", data: rows }
        }
        return
    } catch (error) {
        return { ok: false, error }
    }
}