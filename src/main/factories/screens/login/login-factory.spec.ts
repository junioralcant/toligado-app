import { MakeLoginFactory } from './login-factory';
import { makeLoginValidationFactory } from './login-validation-factory';
import { ValidationBuilder, ValidationComposite } from '@validation/validation';

describe('LoginValidationFactory', () => {
  it('Should make ValidationComposite with correct validations', () => {});
  const makeLoginValidation = makeLoginValidationFactory();
  expect(makeLoginValidation).toEqual(
    ValidationComposite.build([
      ...ValidationBuilder.field('cpf').required().cpf().build(),
    ])
  );
});
