import { BadRequestException } from "../../../errors/base/bad-request-exception.error";

export function validateCpf(cpf: any) {
    if (typeof cpf !== 'number') throw new BadRequestException('CpfMustBeANumber')
    if (cpf.toString().length != 11) throw new BadRequestException('CpfMustHave11Digits')

    return cpf
}