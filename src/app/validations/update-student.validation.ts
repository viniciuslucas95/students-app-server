import { NextFunction, Request, Response } from "express";
import { IUpdateStudentDto } from "../dto/students.dto";
import { BadRequestException } from "../errors/base/bad-request-exception.error";
import { validateName } from "./helpers/validate-name.helper";
import { validateAge } from "./helpers/validate.age.helper";

export function updateStudentValidation(req: Request, res: Response, next: NextFunction) {
    let { name, age } = req.body

    if (!name && !age) throw new BadRequestException('NoChangesSent')

    const body: IUpdateStudentDto = {}

    if (name) body.name = validateName(name)
    if (age) body.age = validateAge(age)

    req.body = body

    next()
}