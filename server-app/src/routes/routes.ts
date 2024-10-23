import express from "express";
import { register } from "../controllers/user-controller";

const router = express.Router()

router.post('/register', register)



export default router