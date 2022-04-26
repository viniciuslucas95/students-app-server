import { ConflictException } from "./base/conflict-exception.error";

export class CpfConflictException extends ConflictException {
    constructor() {
        super('CpfAlreadyExists')
    }
}