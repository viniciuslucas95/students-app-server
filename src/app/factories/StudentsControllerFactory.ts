import { StudentsController } from "../controllers/StudentsController";

export class StudentsControllerFactory {
    static create() {
        const controller = new StudentsController()
        return controller.router
    }
}