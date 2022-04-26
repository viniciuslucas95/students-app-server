import axios from 'axios'
import faker from '@faker-js/faker'
import { CreateStudentDto, UpdateStudentDto } from '../src/app/dto/students.dto'

const baseUrl = 'http://localhost:3000/students'

describe("students route should", () => {
    describe('succeed on', () => {
        test('creating a new student', async () => {
            const student: CreateStudentDto = {
                name: faker.name.findName(),
                age: faker.datatype.number({
                    min: 0, max: 120
                })
            }

            const result = await axios.post(baseUrl, student)

            expect(result.data.id).toBeTruthy()
            expect(result.status).toBe(201)
        })

        test('creating a new student and updating it', async () => {
            const student: CreateStudentDto = {
                name: faker.name.findName(),
                age: faker.datatype.number({
                    min: 0, max: 120
                })
            }

            const creationResult = await axios.post(baseUrl, student)

            const update: UpdateStudentDto = {
                name: faker.name.findName()
            }

            const result = await axios.patch(`${baseUrl}/${creationResult.data.id}`, update)

            expect(result.status).toBe(204)
        })

        test('creating a new student and deleting it', async () => {
            const student: CreateStudentDto = {
                name: faker.name.findName(),
                age: faker.datatype.number({
                    min: 0, max: 120
                })
            }

            const creationResult = await axios.post(baseUrl, student)

            const result = await axios.delete(`${baseUrl}/${creationResult.data.id}`)

            expect(result.status).toBe(204)
        })

        test('creating a new student and getting it', async () => {
            const student: CreateStudentDto = {
                name: faker.name.findName(),
                age: faker.datatype.number({
                    min: 0, max: 120
                })
            }

            const creationResult = await axios.post(baseUrl, student)

            const result = await axios.get(`${baseUrl}/${creationResult.data.id}`)

            expect(result.status).toBe(200)
            expect(result.data.name).toBeTruthy()
            expect(result.data.age).toBeTruthy()
        })

        test('getting all students', async () => {
            const result = await axios.get(baseUrl)

            expect(result.status).toBe(200)
            expect(result.data.length).toBeGreaterThan(3)
        })
    })

    describe('fail on', () => {
        test('creating a new student', async () => {
            const student: any = {
                name: 1321,
                age: -10
            }

            const result = await axios.post(baseUrl, student, {
                validateStatus: null
            })

            expect(result.status).toBe(400)
        })
    })
})