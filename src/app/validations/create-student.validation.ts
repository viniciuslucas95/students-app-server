import { NextFunction, Request, Response } from "express";
import { ICreateStudentDto } from "../dto/students.dto";
import { validateName } from "./helpers/validate-name.helper";

export function createStudentValidation(req: Request, res: Response, next: NextFunction) {
    const name = validateName(req.body.name)

    const body: ICreateStudentDto = {
        name
    }

    req.body = body

    next()
}