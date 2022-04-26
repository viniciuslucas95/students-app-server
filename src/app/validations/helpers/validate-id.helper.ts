import { BadRequestException } from "../../errors/base/bad-request-exception.error"

const ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gm

export function validateId(id: any) {
    if (typeof id !== 'string') throw new BadRequestException('IdMustBeAString')

    const isUuid = id.match(ID_PATTERN)

    if (!isUuid) throw new BadRequestException('IdMustHaveUuidFormat')

    return id
}