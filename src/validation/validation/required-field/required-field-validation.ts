import { RequiredFieldError } from '@validation/errors';
import { IFieldValidation } from '@validation/repositories/field-validation';

export class RequiredFieldValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    return value ? null : new RequiredFieldError();
  }
}
