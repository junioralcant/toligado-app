import { IValidation } from '@presentation/repositories/validation';

export class ValidationSpy implements IValidation {
  errorMessage = '';
  input = {};
  validate(input: object): string {
    this.input = input;
    return this.errorMessage;
  }
}
