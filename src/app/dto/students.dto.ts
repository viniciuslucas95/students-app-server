export interface ICreateStudentDto {
    name: string
}

export interface IGetStudentDto {
    id: string
    name: string
}

export interface IUpdateStudentDto extends Partial<ICreateStudentDto> { }