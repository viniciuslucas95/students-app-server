import { BadRequestException } from "../../errors/base/bad-request-exception.error"

const MIN_NAME_LENGTH = 2
const PORTUGUESE_PATTERN = /[^a-zA-ZáÁéÉíÍóÓúÚãÃõÕâÂêÊôÔàÀèÈìÌòÒùÙüçÇ]/gm

export function validateName(name: string) {
    if (!name) throw new BadRequestException('NameCannotBeNull')
    if (typeof name !== 'string') throw new BadRequestException('NameMustBeAString')

    const minNecessaryLetters = name.replace(PORTUGUESE_PATTERN, '')

    if (minNecessaryLetters.length < MIN_NAME_LENGTH) throw new BadRequestException('NameTooShort', 'It must have at least 2 letters')

    name = name.replace(/'*$/gm, "")
    name = name.replace(/\s*$/gm, "")
    name = name.replace(/^\s*/gm, "")
    name = name.replace(/^'*/gm, "")

    return name
}