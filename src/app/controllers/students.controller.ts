import { Request, Response, Router } from 'express'
import { STATUS_CODE } from '../constants/status-code.constant'
import { IStudentsService } from '../services/students/students-interface.service'
import { createStudentValidation } from '../validations/create-student.validation'

export class StudentsController {
    constructor(private studentsService: IStudentsService, public router: Router) {
        this.setupGetAll()
        this.setupPost()
    }

    private setupGetAll() {
        this.router.get('/', async (req: Request, res: Response) => {
            const result = await this.studentsService.getAllAsync()

            res.json(result)
        })
    }

    private setupPost() {
        this.router.post('/', createStudentValidation, async (req: Request, res: Response) => {
            const result = await this.studentsService.createAsync(req.body)

            res.status(STATUS_CODE.CREATED).json(result)
        })
    }
}