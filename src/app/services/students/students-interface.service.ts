import { IGetIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";

export interface IGetAllStudents {
    students: IGetStudentDto[],
    results: number
}

export interface IStudentsService {
    createAsync(dto: ICreateStudentDto): Promise<IGetIdDto>
    updateAsync(id: string, dto: IUpdateStudentDto): Promise<void>
    deleteAsync(id: string): Promise<void>
    getAllAsync(): Promise<IGetAllStudents>
    getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'>>
    checkUserExistenceAsync(id: string): Promise<void>
}