import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = parseInt(<string>process.env.PORT) || 3000

console.log(port)

const app = express()

app.listen(port, () => {
    if (process.env.NODE_ENV != 'dev') return

    console.log(`Server started at port ${port}...`)
})