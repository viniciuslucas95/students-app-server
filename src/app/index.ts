import express, { json } from 'express'
import dotenv from 'dotenv'
import { StudentsControllerFactory } from './factories/students-controller.factory'
import { errorsHandler } from './middlewares/errors-handler.middleware'

dotenv.config()

const port = parseInt(<string>process.env.PORT) || 3000

const app = express()

app.use(json())
app.use('/students', StudentsControllerFactory.create())
app.use(errorsHandler)

app.listen(port, () => {
    if (process.env.NODE_ENV != 'dev') return

    console.log(`Server started at port ${port}...`)
})