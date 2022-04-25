import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { StudentsRouterFactory } from './factories/students-router.factory'
import { errorsHandler } from './middlewares/errors-handler.middleware'

dotenv.config()

const port = parseInt(<string>process.env.PORT) || 3001

const app = express()

if (process.env.NODE_ENV === 'dev') {
    app.use(cors({
        origin: 'http://localhost:3000'
    }))
}

app.use(json())
app.use('/students', StudentsRouterFactory.create())
app.use(errorsHandler)

app.listen(port, () => {
    if (process.env.NODE_ENV != 'dev') return

    console.log(`Server started at port ${port}...`)
})