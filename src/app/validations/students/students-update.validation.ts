import { NextFunction, Request, Response } from "express";
import { validateCpf } from "./helpers/validate-cpf.helper";
import { validateDate } from "./helpers/validate-date.helper";
import { validateRg } from "./helpers/validate-rg.helper";
import { validateWord } from "./helpers/validate-word.helper";

export function studentsUpdateValidation(req: Request, res: Response, next: NextFunction) {
    const { name, rg, cpf, class: className, address, birthdate } = req.body

    const validatedBody = {
        name: typeof name !== 'undefined' ? validateWord(name) : null,
        rg: typeof rg !== 'undefined' ? validateRg(rg) : null,
        cpf: typeof cpf !== 'undefined' ? validateCpf(cpf) : null,
        class: typeof className !== 'undefined' ? validateWord(className) : null,
        address: typeof address !== 'undefined' ? validateWord(address) : null,
        birthdate: typeof birthdate !== 'undefined' ? validateDate(birthdate) : null
    }

    req.body = validatedBody

    next()
}