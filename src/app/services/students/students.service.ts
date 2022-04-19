import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "../../repositories/students/students-interface.repository";

export class StudentsService {
    constructor(private studentsRepository: IStudentsRepository) { }

    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return this.studentsRepository.createAsync(dto)
    }

}