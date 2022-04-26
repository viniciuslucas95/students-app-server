import { Router } from "express";
import { StudentsController } from "../controllers/students.controller";
import { PostgresStudentsRepository } from "../repositories/students/postgres-students.repository";
import { StudentsService } from "../services/students.service";

export class StudentsRouterFactory {
    static create() {
        const repository = new PostgresStudentsRepository()
        const service = new StudentsService(repository)
        const controller = new StudentsController(service, Router())
        return controller.router
    }
}