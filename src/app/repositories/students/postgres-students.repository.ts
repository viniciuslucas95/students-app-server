import { client } from "../../../configs/postgres.config";
import { IIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "./students-interface.repository";

export class PostgresStudentsRepository implements IStudentsRepository {
    async createAsync({ name, age }: ICreateStudentDto): Promise<IIdDto> {
        const result = await client.query<IIdDto>('INSERT INTO students(name, age) VALUES($1, $2) RETURNING id;', [name, age])

        return result.rows[0]
    }

    async updateAsync(id: string, { name, age }: IUpdateStudentDto): Promise<void> {
        await client.query('UPDATE students SET name = $1, age = $2, updated_at = NOW() WHERE id = $3;', [name, age, id])
    }

    async deleteAsync(id: string): Promise<void> {
        await client.query('DELETE FROM students WHERE id = $1;', [id])
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        const result = await client.query<IGetStudentDto>('SELECT id, name, age FROM students;')

        return result.rows
    }

    async getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'> | undefined> {
        const result = await client.query<Omit<IGetStudentDto, 'id'>>('SELECT name, age FROM students WHERE id = $1;', [id])

        return result.rows[0]
    }

    async checkExistenceAsync(id: string): Promise<boolean> {
        const result = await client.query('SELECT id FROM students WHERE id = $1;', [id])

        return result.rows[0] ? true : false
    }
}