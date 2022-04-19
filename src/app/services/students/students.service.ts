import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "../../repositories/students/students-interface.repository";
import { IStudentsService } from "./students-interface.service";

export class StudentsService implements IStudentsService {
    constructor(private studentsRepository: IStudentsRepository) { }

    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return this.studentsRepository.createAsync(dto)
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        return this.studentsRepository.getAllAsync()
    }
}