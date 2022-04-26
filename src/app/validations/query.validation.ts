import { NextFunction, Request, Response } from "express";
import { QueryDto } from "../dto/common.dto";
import { BadRequestException } from "../errors/base/bad-request-exception.error";

export function queryValidation(req: Request, res: Response, next: NextFunction) {
    const { limit, offset } = req.query

    let limitNumber
    let offsetNumber

    if (limit) {
        if (typeof limit !== 'string') throw new BadRequestException('LimitMustBeAString')

        limitNumber = parseInt(limit)

        if (isNaN(limitNumber)) throw new BadRequestException('InvalidLimit', 'It must be 1 or more')
    }

    if (offset) {
        if (typeof offset !== 'string') throw new BadRequestException('OffsetMustBeAString')

        offsetNumber = parseInt(offset)

        if (isNaN(offsetNumber)) throw new BadRequestException('InvalidOffset', 'It must be 1 or more')
    }

    const validatedQuery: QueryDto = {
        limit: limitNumber,
        offset: offsetNumber
    }

    req.body = validatedQuery

    next()
}