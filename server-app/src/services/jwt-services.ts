import jwt from 'jsonwebtoken'
import { IJwToken } from '../../types'
import dotenv from 'dotenv'
dotenv.config()

const jwtSecret = process.env.JWT_KEY

if (!jwtSecret) {
    throw new Error('JWT_KEY is not defined in environment variables');
}

export const TokenGenerate = ({ id, username, email }: IJwToken,) => {
    const token = jwt.sign(
        {
            id,
            username,
            email
        },

        jwtSecret,
        { expiresIn: '3d' }
    )
    return token
}