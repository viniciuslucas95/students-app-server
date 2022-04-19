import { NotFoundException } from "./base/not-found-exception.error";

export class UserNotFoundException extends NotFoundException {
    constructor() {
        super('UserNotFound')
    }
}