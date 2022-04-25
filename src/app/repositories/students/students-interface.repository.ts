import { ICountResultsDto, IGetIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";

export interface IStudentsRepository {
    createAsync(dto: ICreateStudentDto): Promise<IGetIdDto>
    updateAsync(id: string, dto: IUpdateStudentDto): Promise<void>
    deleteAsync(id: string): Promise<void>
    getAllAsync(): Promise<IGetStudentDto[]>
    getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'> | undefined>
    checkExistenceAsync(id: string): Promise<boolean>
    countAll(): Promise<ICountResultsDto>
}