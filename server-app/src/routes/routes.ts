import express from "express";
import { login, register } from "../controllers/user-controller";
import { verifyToken } from "../middlewares/verify-token";
import { addTask, getTasks } from "../controllers/task-controller";
//import { verifyToken } from "../middlewares/verify-token";

const router = express.Router()

// user
router.post('/register', register)
router.post('/login', login)

// task
router.get('/tasks', verifyToken, getTasks)
router.post('/addtask', verifyToken, addTask)


export default router