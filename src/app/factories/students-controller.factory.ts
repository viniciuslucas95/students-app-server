import { StudentsController } from "../controllers/students.controller";
import { StudentsService } from "../services/students/students.service";

export class StudentsControllerFactory {
    static create() {
        const service = new StudentsService()
        const controller = new StudentsController(service)
        return controller.router
    }
}