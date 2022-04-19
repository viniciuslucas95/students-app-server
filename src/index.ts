import express from 'express'
import dotenv from 'dotenv'
import { studentsRouter } from './controllers/students.controller'

dotenv.config()

const port = parseInt(<string>process.env.PORT) || 3000

const app = express()

app.use('/students', studentsRouter)

app.listen(port, () => {
    if (process.env.NODE_ENV != 'dev') return

    console.log(`Server started at port ${port}...`)
})