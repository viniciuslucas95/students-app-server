import { client } from "../../../configs/postgres.config";
import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "./students-interface.repository";

export class PostgresStudentsRepository implements IStudentsRepository {
    async createAsync(dto: ICreateStudentDto): Promise<IIdDto> {
        const result = await client.query<IIdDto>('INSERT INTO students(name) VALUES($1) RETURNING id;', [dto.name])

        return result.rows[0]
    }

    async updateAsync(id: string, dto: IUpdateStudentDto): Promise<void> {
        await client.query('UPDATE students SET name = $1 WHERE id = $2;', [dto.name, id])
    }

    async deleteAsync(id: string): Promise<void> {
        await client.query('DELETE FROM students WHERE id = $1;', [id])
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        const result = await client.query<IGetStudentDto>('SELECT id, name FROM students;')

        return result.rows
    }

    async getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'>> {
        const result = await client.query<Omit<IGetStudentDto, 'id'>>('SELECT name FROM students WHERE id = $1;', [id])

        return result.rows[0]
    }
}