export interface CreateStudentDto {
    name: string
    rg: number
    cpf: number
    class: string
    address: string
    birthdate: Date
}

export interface GetStudentDto {
    id: string
    name: string
    rg: number
    cpf: number
    class: string
    address: string
    birthdate: Date
}

export interface UpdateStudentDto extends Partial<CreateStudentDto> { }