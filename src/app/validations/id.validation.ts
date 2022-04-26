import { NextFunction, Request, Response } from "express";
import { validateId } from "./helpers/validate-id.helper";

export function idValidation(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    req.params.id = validateId(id)

    next()
}