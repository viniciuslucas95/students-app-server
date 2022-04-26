import { QueryDto } from "../../dto/common.dto"

export function getQuery({ limit, offset }: QueryDto) {
    let string = ''
    let array = undefined
    let valuePosition = 1

    if (limit) {
        string += ` LIMIT $${valuePosition}`

        array = [limit]

        if (offset) valuePosition++;
    }

    if (offset) {
        string += ` OFFSET $${valuePosition}`

        if (!array) array = [offset]
        else array.push(offset)
    }

    return { string, array }
}