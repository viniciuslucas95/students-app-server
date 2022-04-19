import { Request, Response, Router } from 'express'

export class StudentsController {
    router

    constructor() {
        this.router = Router()

        this.setupGetAll()
        this.setupPost()
    }

    private setupGetAll() {
        this.router.get('/', async (req: Request, res: Response) => {
            res.send({
                getAll: 'ok'
            })
        })
    }

    private setupPost() {
        this.router.post('/', async (req: Request, res: Response) => {
            res.send({
                post: 'ok'
            })
        })
    }
}