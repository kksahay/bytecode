import express from "express"
import authRoute from './routes/authRoute.js'
import problemsetRoute from './routes/problemsetRoute.js'
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/problemset', problemsetRoute)

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})