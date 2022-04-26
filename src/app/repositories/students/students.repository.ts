import { CreateStudentDto, GetStudentDto, UpdateStudentDto } from "../../dto/students.dto";
import { CountReturnDto, CreationReturnDto } from '../../dto/common.dto'

export interface StudentsRepository {
    create(dto: CreateStudentDto): Promise<CreationReturnDto>
    update(id: string, dto: UpdateStudentDto): Promise<void>
    delete(id: string): Promise<void>
    find(): Promise<GetStudentDto[]>
    findOne(id: string): Promise<Omit<GetStudentDto, 'id'> | undefined>
    checkExistence(id: string): Promise<boolean>
    checkExistenceByRg(rg: number): Promise<boolean>
    checkExistenceByCpf(cpf: number): Promise<boolean>
    count(): Promise<CountReturnDto>
}