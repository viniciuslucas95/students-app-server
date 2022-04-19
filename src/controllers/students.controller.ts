import { Request, Response, Router } from 'express'

export const studentsRouter = Router()

studentsRouter.get('/', async (req: Request, res: Response) => {
    res.send({
        test: 'ok'
    })
})