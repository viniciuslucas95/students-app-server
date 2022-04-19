import { client } from "../../../configs/postgres.config";
import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "./students-interface.repository";

export class PostgresStudentsRepository implements IStudentsRepository {
    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        const result = await client.query<IIdDto>('INSERT INTO students(name) VALUES($1) RETURNING id;', [dto.name])

        return result.rows[0]
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        const result = await client.query<IGetStudentDto>('SELECT id, name FROM students;')

        return result.rows
    }
}