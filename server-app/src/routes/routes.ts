import express from "express";
import { login, register } from "../controllers/user-controller";
//import { verifyToken } from "../middlewares/verify-token";

const router = express.Router()

// user
router.post('/register', register)
router.post('/login', login)

// task


export default router