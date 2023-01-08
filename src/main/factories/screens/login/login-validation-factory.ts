import { ValidationBuilder, ValidationComposite } from '@validation/validation';

export function makeLoginValidationFactory(): ValidationComposite {
  return ValidationComposite.build([
    ...ValidationBuilder.field('cpf').required().cpf().build(),
  ]);
}
