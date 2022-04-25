import { client } from "../../../configs/postgres.config";
import { ICountResultsDto, IGetIdDto } from "../../dto/common.dto";
import { ICreateStudentDto, IGetStudentDto, IUpdateStudentDto } from "../../dto/students.dto";
import { IStudentsRepository } from "./students-interface.repository";

export class PostgresStudentsRepository implements IStudentsRepository {
    async createAsync({ name, rg, cpf, age, class: className, address }: ICreateStudentDto): Promise<IGetIdDto> {
        const result = await client.query<IGetIdDto>('INSERT INTO students(name, rg, cpf, age, class, address) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;', [name, rg, cpf, age, className, address])

        return result.rows[0]
    }

    async updateAsync(id: string, { name, rg, cpf, age, class: className, address }: IUpdateStudentDto): Promise<void> {
        await client.query('UPDATE students SET name = $1, rg = $2, cpf = $3, age = $4, class = $5, address = $6, updated_at = NOW() WHERE id = $7;', [name, rg, cpf, age, className, address, id])
    }

    async deleteAsync(id: string): Promise<void> {
        await client.query('DELETE FROM students WHERE id = $1;', [id])
    }

    async getAllAsync(): Promise<IGetStudentDto[]> {
        const result = await client.query<IGetStudentDto>('SELECT id, name, rg, cpf, age, class, address FROM students;')

        return result.rows
    }

    async getOneAsync(id: string): Promise<Omit<IGetStudentDto, 'id'> | undefined> {
        const result = await client.query<Omit<IGetStudentDto, 'id'>>('SELECT name, rg, cpf, age, class, address FROM students WHERE id = $1;', [id])

        return result.rows[0]
    }

    async checkExistenceAsync(id: string): Promise<boolean> {
        const result = await client.query('SELECT id FROM students WHERE id = $1;', [id])

        return result.rows[0] ? true : false
    }

    async countAll(): Promise<ICountResultsDto> {
        const result = await client.query<ICountResultsDto>('SELECT COUNT(id) AS results FROM students;')

        return result.rows[0]
    }
}