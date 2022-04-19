import { NextFunction, Request, Response } from "express";
import { ICreateStudentDto } from "../dto/students.dto";
import { validateName } from "./helpers/validate-name.helper";
import { validateAge } from "./helpers/validate.age.helper";

export function createStudentValidation(req: Request, res: Response, next: NextFunction) {
    const name = validateName(req.body.name)
    const age = validateAge(req.body.age)

    const body: ICreateStudentDto = {
        name,
        age
    }

    req.body = body

    next()
}