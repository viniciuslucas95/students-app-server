import { NextFunction, Request, Response, Router } from 'express'
import { STATUS_CODE } from '../constants/status-code.constant'
import { IStudentsService } from '../services/students/students-interface.service'
import { createStudentValidation } from '../validations/create-student.validation'
import { updateStudentValidation } from '../validations/update-student.validation'

export class StudentsController {
    constructor(private studentsService: IStudentsService, public router: Router) {
        this.setupPost()
        this.setupPatch()
        this.setupDelete()
        this.setupGetAll()
        this.setupGetOne()
    }

    private setupPost() {
        this.router.post('/', createStudentValidation, async (req: Request, res: Response, next: NextFunction) => {
            const result = await this.studentsService.createAsync(req.body)
            res.status(STATUS_CODE.CREATED).json(result)
        })
    }

    private setupPatch() {
        this.router.patch('/:id', updateStudentValidation, async (req: Request, res: Response, next: NextFunction) => {
            await this.studentsService.updateAsync(req.params.id, req.body)
            res.sendStatus(STATUS_CODE.NO_CONTENT)
        })
    }

    private setupDelete() {
        this.router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
            await this.studentsService.deleteAsync(req.params.id)
            res.sendStatus(STATUS_CODE.NO_CONTENT)
        })
    }

    private setupGetAll() {
        this.router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            const result = await this.studentsService.getAllAsync()
            res.json(result)
        })
    }

    private setupGetOne() {
        this.router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            const result = await this.studentsService.getOneAsync(req.params.id)
            res.json(result)
        })
    }
}