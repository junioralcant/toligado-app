import { InvalidCpfError } from '@validation/errors';
import { CpfValidation } from './cpf-validation';

describe('CpfValidation', () => {
  it('Should rentur error if CPF is invalid', () => {
    const sut = new CpfValidation('cpf');
    const error = sut.validate('04403030360');
    expect(error).toEqual(new InvalidCpfError());
  });
});
