import { InvalidCpfError } from '@validation/errors';
import { IFieldValidation } from '@validation/repositories/field-validation';

export class CpfValidation implements IFieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): Error | null {
    return new InvalidCpfError();
  }
}
