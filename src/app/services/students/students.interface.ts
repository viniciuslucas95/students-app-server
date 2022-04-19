import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto } from "../../dto/students.dto";

export interface IStudentsService {
    createAsync(dto: ICreateStudentDto): Promise<IIdDto>
}