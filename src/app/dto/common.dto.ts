export interface CreationReturnDto {
    id: string
}

export interface CountReturnDto {
    results: number
}

export interface QueryDto {
    limit?: number,
    offset?: number
}