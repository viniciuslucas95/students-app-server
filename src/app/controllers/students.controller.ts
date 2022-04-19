import { Request, Response, Router } from 'express'
import { IStudentsService } from '../services/students/students-interface.service'
import { createStudentValidation } from '../validations/create-student.validation'

export class StudentsController {
    constructor(private studentsService: IStudentsService, public router: Router) {
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
        this.router.post('/', createStudentValidation, async (req: Request, res: Response) => {
            this.studentsService.createAsync(req.body)
        })
    }
}