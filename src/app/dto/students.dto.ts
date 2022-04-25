export interface ICreateStudentDto {
    name: string
    rg: number
    cpf: number
    age: number
    class: string
    address: string
}

export interface IGetStudentDto {
    id: string
    name: string
    rg: number
    cpf: number
    age: number
    class: string
    address: string
}

export interface IUpdateStudentDto extends Partial<ICreateStudentDto> { }