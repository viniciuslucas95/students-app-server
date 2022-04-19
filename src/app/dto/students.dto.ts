export interface ICreateStudentDto {
    name: string
    age: number
}

export interface IGetStudentDto {
    id: string
    name: string
    age: number
}

export interface IUpdateStudentDto extends Partial<ICreateStudentDto> { }