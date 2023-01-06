import { IFieldValidation } from '@validation/repositories/field-validation';

export class FieldValidationSpy implements IFieldValidation {
  constructor(readonly field: string) {}
  error: Error | null = null;

  validate(value: string): Error | null {
    return this.error;
  }
}
