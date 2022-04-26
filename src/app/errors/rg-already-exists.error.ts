import { ConflictException } from "./base/conflict-exception.error";

export class RgConflictException extends ConflictException {
    constructor() {
        super('RgAlreadyExists')
    }
}