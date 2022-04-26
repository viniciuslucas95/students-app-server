import { client } from "../../../configs/postgres.config";
import { CountReturnDto, CreationReturnDto } from "../../dto/common.dto";
import { CreateStudentDto, GetStudentDto, UpdateStudentDto } from "../../dto/students.dto";
import { getDtoValues } from "../helpers/get-dto-values.helper";
import { StudentsRepository } from "./students.repository";

export class PostgresStudentsRepository implements StudentsRepository {
    async create(dto: CreateStudentDto): Promise<CreationReturnDto> {
        const result = await client.query<CreationReturnDto>('INSERT INTO students(name, rg, cpf, class, address, birthdate) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;', getDtoValues(dto))

        return result.rows[0]
    }

    async update(id: string, dto: UpdateStudentDto): Promise<void> {
        await client.query('UPDATE students SET name = COALESCE($1, name), rg = COALESCE($2, rg), cpf = COALESCE($3, cpf), class = COALESCE($4, class), address = COALESCE($5, address), birthdate = COALESCE($6, birthdate), updated_at = NOW() WHERE id = $7;', [...getDtoValues(dto), id])
    }

    async delete(id: string): Promise<void> {
        await client.query('DELETE FROM students WHERE id = $1;', [id])
    }

    async find(): Promise<GetStudentDto[]> {
        const result = await client.query<GetStudentDto>("SELECT id, name, rg, cpf, class, address, TO_CHAR(birthdate,'YYYY-MM-DD') birthdate FROM students;")

        return result.rows
    }

    async findOne(id: string): Promise<Omit<GetStudentDto, 'id'> | undefined> {
        const result = await client.query<Omit<GetStudentDto, 'id'>>("SELECT name, rg, cpf, class, address, TO_CHAR(birthdate, 'YYYY-MM-DD') birthdate FROM students WHERE id = $1 LIMIT 1;", [id])

        return result.rows[0]
    }

    async checkExistence(id: string): Promise<boolean> {
        const result = await client.query('SELECT id FROM students WHERE id = $1 LIMIT 1;', [id])

        return result.rows[0] ? true : false
    }

    async checkExistenceByRg(rg: number): Promise<boolean> {
        const result = await client.query('SELECT rg FROM students WHERE rg = $1 LIMIT 1;', [rg])

        return result.rows[0] ? true : false
    }

    async checkExistenceByCpf(cpf: number): Promise<boolean> {
        const result = await client.query('SELECT cpf FROM students WHERE cpf = $1 LIMIT 1;', [cpf])

        return result.rows[0] ? true : false
    }

    async count(): Promise<CountReturnDto> {
        const result = await client.query<CountReturnDto>('SELECT COUNT(id) AS results FROM students;')

        return result.rows[0]
    }
}