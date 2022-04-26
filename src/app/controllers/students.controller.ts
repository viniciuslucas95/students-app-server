import { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODE } from '../errors/constants/status-code.constant'
import { StudentsService } from '../services/students.service'

export class StudentsController {
    constructor(private service: StudentsService, public router: Router) {
        this.setupPost()
        this.setupPatch()
        this.setupDelete()
        this.setupGetAll()
        this.setupGetOne()
    }

    private setupPost() {
        this.router.post('/', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await this.service.create(req.body)
                res.status(STATUS_CODE.CREATED).json(result)
            } catch (err) {
                next(err)
            }
        })
    }

    private setupPatch() {
        this.router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
            try {
                await this.service.update(req.params.id, req.body)
                res.sendStatus(STATUS_CODE.NO_CONTENT)
            } catch (err) {
                next(err)
            }
        })
    }

    private setupDelete() {
        this.router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
            try {
                await this.service.delete(req.params.id)
                res.sendStatus(STATUS_CODE.NO_CONTENT)
            } catch (err) {
                next(err)
            }
        })
    }

    private setupGetAll() {
        this.router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await this.service.findAll()
                res.json(result)
            } catch (err) {
                next(err)
            }
        })
    }

    private setupGetOne() {
        this.router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await this.service.findOne(req.params.id)
                res.json(result)
            } catch (err) {
                next(err)
            }
        })
    }
}