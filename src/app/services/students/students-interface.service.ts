import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto } from "../../dto/students.dto";

export interface IStudentsService {
    createAsync(dto: ICreateStudentDto): Promise<IIdDto>
    getAllAsync(): Promise<IGetStudentDto[]>
}