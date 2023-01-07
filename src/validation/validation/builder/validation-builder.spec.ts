import { faker } from '@faker-js/faker';
import { RequiredFieldValidation, CpfValidation } from '@validation/validation';
import { ValidationBuilder } from './validation-builder';

describe('ValidationBuilder', () => {
  it('Shoul return RequiredFieldValidation', () => {
    const fieldName = faker.database.column();
    const validatoins = ValidationBuilder.field(fieldName).required().build();
    expect(validatoins).toEqual([new RequiredFieldValidation(fieldName)]);
  });

  it('Shoul return CpfValidation', () => {
    const fieldName = faker.database.column();
    const validatoins = ValidationBuilder.field(fieldName).cpf().build();
    expect(validatoins).toEqual([new CpfValidation(fieldName)]);
  });

  it('Shoul return a list of validations', () => {
    const fieldName = faker.database.column();
    const validatoins = ValidationBuilder.field(fieldName)
      .required()
      .cpf()
      .build();

    expect(validatoins).toEqual([
      new CpfValidation(fieldName),
      new RequiredFieldValidation(fieldName),
    ]);
  });
});
