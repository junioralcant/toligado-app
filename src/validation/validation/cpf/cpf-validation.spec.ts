import { InvalidCpfError } from '@validation/errors';
import { CpfValidation } from './cpf-validation';

describe('CpfValidation', () => {
  it('Should return error if CPF is invalid', () => {
    const sut = new CpfValidation('cpf');
    const error = sut.validate('04403030360');
    expect(error).toEqual(new InvalidCpfError());
  });

  it('Should not return error if CPF is valid', () => {
    const sut = new CpfValidation('cpf');
    const error = sut.validate('157.861.480-50');
    expect(error).toBeFalsy();
  });
});
