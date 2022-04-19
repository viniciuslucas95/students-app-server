import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "./students-interface.repository";

export class PostgresStudentsRepository implements IStudentsRepository {
    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        return {
            id: '123'
        }
    }

}