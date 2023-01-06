import { InvalidCpfError } from '@validation/errors';
import { IFieldValidation } from '@validation/repositories/field-validation';

export class CpfValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return cpfRegex.test(value) || !value ? null : new InvalidCpfError();
  }
}
