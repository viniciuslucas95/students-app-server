import { ConflictException } from "../../errors/base/conflict-exception.error";

export class RgConflictException extends ConflictException {
    constructor() {
        super('RgAlreadyExists')
    }
}