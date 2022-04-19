import { Request, Response, Router } from 'express'
import { IStudentsService } from '../services/students/students.interface'
import { createStudentValidation } from '../validations/create-student.validation'

export class StudentsController {
    router

    constructor(private studentsService: IStudentsService) {
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
        this.router.post('/', createStudentValidation, async (req: Request, res: Response) => {
            res.send({
                post: 'ok'
            })
        })
    }
}