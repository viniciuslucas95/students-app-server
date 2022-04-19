import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { UserNotFoundException } from "../../errors/user-not-found-exception.error";
import { IStudentsRepository } from "../../repositories/students/students-interface.repository";
import { IStudentsService } from "./students-interface.service";

export class StudentsService implements IStudentsService {
    constructor(private studentsRepository: IStudentsRepository) { }

    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return this.studentsRepository.createAsync(dto)
    }

    async updateAsync(id: string, dto: IUpdateStudentDto): Promise<void> {
        const user = await this.getOneAsync(id)

        if (!dto.age) dto.age = user.age
        if (!dto.name) dto.name = user.name

        return this.studentsRepository.updateAsync(id, dto)
    }

    async deleteAsync(id: string): Promise<void> {
        await this.checkUserExistenceAsync(id)

        return this.studentsRepository.deleteAsync(id)
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        return this.studentsRepository.getAllAsync()
    }

    async getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'>> {
        const user = await this.studentsRepository.getOneAsync(id)

        if (!user) throw new UserNotFoundException()

        return user
    }

    async checkUserExistenceAsync(id: string) {
        const userExists = await this.studentsRepository.checkExistenceAsync(id)

        if (!userExists) throw new UserNotFoundException()
    }
}