import express from 'express'
import router from './routes/routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    console.log("http://localhost:3000")
})

app.use(router)