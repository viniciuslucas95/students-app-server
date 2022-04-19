import { HttpRequestException } from "./http-request-exception.error"

const BAD_REQUEST_STATUS_CODE = 400

export class BadRequestException extends HttpRequestException {
    constructor(name: string, message?: string) {
        super(name, BAD_REQUEST_STATUS_CODE, message)
    }
}