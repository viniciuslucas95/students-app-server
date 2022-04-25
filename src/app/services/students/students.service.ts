import { IGetIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { UserNotFoundException } from "../../errors/user-not-found-exception.error";
import { IStudentsRepository } from "../../repositories/students/students-interface.repository";
import { IGetAllStudents, IStudentsService } from "./students-interface.service";

export class StudentsService implements IStudentsService {
    constructor(private studentsRepository: IStudentsRepository) { }

    async createAsync(dto: ICreateStudentDto): Promise<IGetIdDto> {
        return this.studentsRepository.createAsync(dto)
    }

    async updateAsync(id: string, dto: IUpdateStudentDto): Promise<void> {
        const user = await this.getOneAsync(id)

        if (!dto.name) dto.name = user.name
        if (!dto.rg) dto.rg = user.rg
        if (!dto.cpf) dto.cpf = user.cpf
        if (!dto.age) dto.age = user.age
        if (!dto.class) dto.class = user.class
        if (!dto.address) dto.address = user.address

        return this.studentsRepository.updateAsync(id, dto)
    }

    async deleteAsync(id: string): Promise<void> {
        await this.checkUserExistenceAsync(id)

        return this.studentsRepository.deleteAsync(id)
    }

    async getAllAsync(): Promise<IGetAllStudents> {
        const students = await this.studentsRepository.getAllAsync()
        const { results } = await this.studentsRepository.countAll()

        return { students, results }
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