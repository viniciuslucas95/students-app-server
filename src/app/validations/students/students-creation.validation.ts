import { NextFunction, Request, Response } from "express";
import { CreateStudentDto } from "../../dto/students.dto";
import { validateCpf } from "./helpers/validate-cpf.helper";
import { validateWord } from "./helpers/validate-word.helper";
import { validateRg } from "./helpers/validate-rg.helper";
import { validateDate } from "./helpers/validate-date.helper";

export function studentsCreationValidation(req: Request, res: Response, next: NextFunction) {
    const { name, rg, cpf, class: className, address, birthdate } = req.body

    const validatedBody: CreateStudentDto = {
        name: validateWord(name),
        rg: validateRg(rg),
        cpf: validateCpf(cpf),
        class: validateWord(className),
        address: validateWord(address),
        birthdate: validateDate(birthdate)
    }

    req.body = validatedBody

    next()
}