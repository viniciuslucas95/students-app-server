import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto } from "../../dto/students.dto";

export interface IStudentsRepository {
    createAsync(dto: ICreateStudentDto): Promise<IIdDto>
}