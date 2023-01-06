import { InvalidCpfError } from '@validation/errors';
import { CpfValidation } from './cpf-validation';

function makeSut(field: string): CpfValidation {
  return new CpfValidation(field);
}

describe('CpfValidation', () => {
  it('Should return error if CPF is invalid', () => {
    const sut = makeSut('cpf');
    const error = sut.validate('15786148050');
    expect(error).toEqual(new InvalidCpfError());
  });

  it('Should not return error if CPF is valid', () => {
    const sut = makeSut('cpf');
    const error = sut.validate('157.861.480-50');
    expect(error).toBeFalsy();
  });
});
