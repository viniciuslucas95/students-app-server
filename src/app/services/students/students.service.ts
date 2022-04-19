import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto } from "../../dto/students.dto";

export class StudentsService {
    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return {
            id: 'test'
        }
    }

}