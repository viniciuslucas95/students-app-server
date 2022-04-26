import { ConflictException } from "../../errors/base/conflict-exception.error";


export class CpfConflictException extends ConflictException {
    constructor() {
        super('CpfAlreadyExists')
    }
}