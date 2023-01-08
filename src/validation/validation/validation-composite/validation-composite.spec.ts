import { faker } from '@faker-js/faker';
import { FieldValidationSpy } from '@validation/mocks';
import { ValidationComposite } from './validation-composite';

type SutTypes = {
  sut: ValidationComposite;
  fieldValidationsSpy: FieldValidationSpy[];
};
function makeSut(): SutTypes {
  const fieldValidationSpy = new FieldValidationSpy('any_field');
  const fieldValidationSpy2 = new FieldValidationSpy('any_field');

  const fieldValidationsSpy = [fieldValidationSpy, fieldValidationSpy2];
  /**
   * this is where the ValidationBuilder would come in, but in the unit tests we didn't use it
   * ValidationComposite.build([ValidationBuilder.field('field_nane').required().cpf().biuld()])
   */
  const sut = ValidationComposite.build(fieldValidationsSpy);
  return {
    sut,
    fieldValidationsSpy,
  };
}

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const { sut, fieldValidationsSpy } = makeSut();
    const errorMessage1 = faker.random.words();
    const errorMessage2 = faker.random.words();
    fieldValidationsSpy[0].error = new Error(errorMessage1);
    fieldValidationsSpy[1].error = new Error(errorMessage2);
    const error = sut.validate({ any_field: faker.random.word() });
    expect(error).toBe(errorMessage1);
  });

  it('Should not return error if any validation no fails', () => {
    const { sut } = makeSut();
    const error = sut.validate({ any_field: faker.random.word() });
    expect(error).toBeFalsy();
  });
});
