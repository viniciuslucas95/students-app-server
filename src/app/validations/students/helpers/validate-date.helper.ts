import { BadRequestException } from "../../../errors/base/bad-request-exception.error";

export function validateDate(date: any) {
    if (typeof date !== 'string') throw new BadRequestException('DateMustBeAString')

    const convertedDate = new Date(date)

    if (convertedDate.toString() === 'Invalid Date') throw new BadRequestException('DateWrongFormat', 'It must be YYYY-MM-DD')

    return convertedDate
}