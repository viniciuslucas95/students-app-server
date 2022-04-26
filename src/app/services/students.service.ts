import { CreationReturnDto, QueryDto } from "../dto/common.dto";
import { CreateStudentDto, GetStudentDto, UpdateStudentDto } from "../dto/students.dto";
import { StudentsRepository } from "../repositories/students/students.repository";
import { CpfConflictException } from "./errors/cpf-already-exists.error";
import { RgConflictException } from "./errors/rg-already-exists.error";
import { StudentNotFoundException } from "./errors/student-not-found-exception.error";

export interface GetAllStudentsDto {
    students: GetStudentDto[],
    results: number
}

export class StudentsService {
    constructor(private repository: StudentsRepository) { }

    async create(dto: CreateStudentDto): Promise<CreationReturnDto> {
        await this.checkExistenceByRg(dto.rg)
        await this.checkExistenceByCpf(dto.cpf)

        return this.repository.create(dto)
    }

    async update(id: string, dto: UpdateStudentDto): Promise<void> {
        const user = await this.findOne(id)

        if (dto.rg) {
            if (dto.rg === user.rg) throw new RgConflictException()
            else await this.checkExistenceByRg(dto.rg)
        }

        if (dto.cpf) {
            if (dto.cpf === user.cpf) throw new CpfConflictException()
            else await this.checkExistenceByCpf(dto.cpf)
        }

        return this.repository.update(id, dto)
    }

    async delete(id: string): Promise<void> {
        if (!await this.repository.checkExistence(id)) throw new StudentNotFoundException()

        return this.repository.delete(id)
    }

    async findAll(query: QueryDto): Promise<GetAllStudentsDto> {
        const students = await this.repository.find(query)
        const { results } = await this.repository.count()

        return { students, results }
    }

    async findOne(id: string): Promise<Omit<GetStudentDto, 'id'>> {
        const user = await this.repository.findOne(id)

        if (!user) throw new StudentNotFoundException()

        return user
    }

    private async checkExistenceByRg(rg: number) {
        if (await this.repository.checkExistenceByRg(rg)) throw new RgConflictException()
    }

    private async checkExistenceByCpf(cpf: number) {
        if (await this.repository.checkExistenceByCpf(cpf)) throw new CpfConflictException()
    }
}