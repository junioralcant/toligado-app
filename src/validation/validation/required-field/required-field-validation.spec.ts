import { faker } from '@faker-js/faker';
import { RequiredFieldError } from '@validation/errors';
import { RequiredFieldValidation } from './required-field-validation';

describe('RequiredFieldValidation', () => {
  it('Should return error if field is empty', () => {
    const field = faker.database.column();
    const sut = new RequiredFieldValidation(field);
    const error = sut.validate('');
    expect(error).toEqual(new RequiredFieldError());
  });
});
