import { NextFunction, Request, Response } from "express";
import { HttpRequestException } from "../errors/http-request-exception.error";

export function errorsHandler({ name, message, statusCode }: HttpRequestException, req: Request, res: Response, next: NextFunction) {
    res.status(statusCode).json({ name, message })
}