import { BadRequestException } from "../errors/bad-request-exception.error"

const MIN_NAME_LENGTH = 3
const PORTUGUESE_PATTERN = /[a-zA-ZáÁéÉíÍóÓúÚãÃõÕâÂêÊôÔàÀèÈìÌòÒùÙüçÇ ']/gm

export function validateName(name: string) {
    if (!name) throw new BadRequestException('NameCannotBeNull')
    if (typeof name !== 'string') throw new BadRequestException('NameMustBeString')

    const notAllowedLetters = name.replace(PORTUGUESE_PATTERN, '')

    if (notAllowedLetters.length > 0) throw new BadRequestException('InvalidNameLetter')

    const normalLetters = name.replace(/[^a-zA-Z]/gm, '')

    if (normalLetters.length < MIN_NAME_LENGTH) throw new BadRequestException('NameTooShort', 'It must have at least 3 letters')

    name = name.replace(/'*$/gm, "")
    name = name.replace(/\s*$/gm, "")
    name = name.replace(/^\s*/gm, "")
    name = name.replace(/^'*/gm, "")

    return name
}