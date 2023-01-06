import { faker } from '@faker-js/faker';
import { RequiredFieldError } from '@validation/errors';
import { RequiredFieldValidation } from './required-field-validation';

function makeSut(field: string): RequiredFieldValidation {
  const sut = new RequiredFieldValidation(field);
  return sut;
}

describe('RequiredFieldValidation', () => {
  it('Should return error if field is empty', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const error = sut.validate('');
    expect(error).toEqual(new RequiredFieldError());
  });

  it('Should not return error if field is not empty', () => {
    const field = faker.database.column();
    const sut = new RequiredFieldValidation(field);
    const error = sut.validate(faker.random.words());
    expect(error).toBeFalsy();
  });
});
