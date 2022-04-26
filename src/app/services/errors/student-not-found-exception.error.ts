import { NotFoundException } from "../../errors/base/not-found-exception.error";

export class StudentNotFoundException extends NotFoundException {
    constructor() {
        super('StudentNotFound')
    }
}