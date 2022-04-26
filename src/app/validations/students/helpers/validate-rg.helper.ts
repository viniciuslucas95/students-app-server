import { BadRequestException } from "../../../errors/base/bad-request-exception.error";

export function validateRg(rg: any) {
    if (typeof rg !== 'number') throw new BadRequestException('RgMustBeANumber')
    if (rg.toString().length != 9) throw new BadRequestException('RgMustHave9Digits')

    return rg
}