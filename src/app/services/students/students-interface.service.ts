import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";

export interface IStudentsService {
    createAsync(dto: ICreateStudentDto): Promise<IIdDto>
    updateAsync(id: string, dto: IUpdateStudentDto): Promise<void>
    deleteAsync(id: string): Promise<void>
    getAllAsync(): Promise<IGetStudentDto[]>
    getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'>>
}