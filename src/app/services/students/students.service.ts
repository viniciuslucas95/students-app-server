import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "../../repositories/students/students-interface.repository";
import { IStudentsService } from "./students-interface.service";

export class StudentsService implements IStudentsService {
    constructor(private studentsRepository: IStudentsRepository) { }

    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return this.studentsRepository.createAsync(dto)
    }

    async updateAsync(id: string, dto: IUpdateStudentDto): Promise<void> {
        return this.studentsRepository.updateAsync(id, dto)
    }

    async deleteAsync(id: string): Promise<void> {
        return this.studentsRepository.deleteAsync(id)
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        return this.studentsRepository.getAllAsync()
    }

    async getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'>> {
        return this.studentsRepository.getOneAsync(id)
    }
}