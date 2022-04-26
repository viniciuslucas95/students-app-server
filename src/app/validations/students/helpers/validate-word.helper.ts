import { BadRequestException } from "../../../errors/base/bad-request-exception.error";

export function validateWord(word: any) {
    if (typeof word !== 'string') throw new BadRequestException('WordMustBeAString')
    if (word === '') throw new BadRequestException('WordCannotBeEmpty')

    return word
}