import { Response, Request } from "express";
import { newTask } from "../../types";
import { createNewTask, getTaskList } from "../services/task-services";

export const getTasks = async (req: Request, res: Response) => {
    try {
        const idUser = req.id
        const dataTask = await getTaskList(idUser)
        if (dataTask?.ok === true) {
            res.status(200).json({ ok: true, data: dataTask.data })
        } else {
            res.status(400).json({ok:false, message:dataTask?.message})
        }
    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}

export const addTask = async (req: Request, res: Response) => {
    try {
        const task = req.body
        const idUser = req.id
        const taskValidate = newTask.safeParse(task)
        console.log(taskValidate)
        if (taskValidate.success === true) {
            const { budget, description, state, priority, tittle } = taskValidate.data
            const addTask = await createNewTask({ idUser, budget, description, state, priority, tittle })
            if (addTask.ok === true) {
                res.status(201).json({ ok: true, message: "Tarea agregada con exito", task: addTask.task })
            } else {
                res.status(400).json({ ok: false, message: "No se pudo agregar la tarea" })
            }
        } else {
            res.status(501).json({ok:false, message:"Validacion de datos fallida"})
        }
    } catch (error) {
        res.status(500).json({ ok: false, message: "Internal Server Error" })
    }
}