import { RequiredFieldValidation } from '../required-field/required-field-validation';
import { ValidationBuilder } from './validation-builder';

describe('ValidationBuilder', () => {
  it('Shoul return RequiredFieldValidation', () => {
    const fieldName = 'any_field';
    const validatoins = ValidationBuilder.field(fieldName).required().build();
    expect(validatoins).toEqual([new RequiredFieldValidation(fieldName)]);
  });
});
