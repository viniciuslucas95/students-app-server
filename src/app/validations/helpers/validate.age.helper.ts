import { BadRequestException } from "../../errors/base/bad-request-exception.error"

const MIN_AGE = 0
const MAX_AGE = 120

export function validateAge(age: number) {
    if (!age) throw new BadRequestException('AgeCannotBeNull')
    if (typeof age !== 'number') throw new BadRequestException('AgeMustBeANumber')
    if (age < MIN_AGE || age > MAX_AGE) throw new BadRequestException('InvalidAge', 'Age must be between 0-120')

    return age
}