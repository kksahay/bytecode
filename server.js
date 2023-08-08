import express from "express"
import submitRoute from './routes/submitRoute.js'
import problemRoute from './routes/problemRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'
import { pool } from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())
app.use('/api/v1/submit', submitRoute)
app.use('/api/v1/problem', problemRoute)

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})