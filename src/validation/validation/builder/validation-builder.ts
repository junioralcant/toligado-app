import { IFieldValidation } from '@validation/repositories/field-validation';
import { RequiredFieldValidation, CpfValidation } from '@validation/validation';

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: IFieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  }

  cpf(): ValidationBuilder {
    this.validations.push(new CpfValidation(this.fieldName));
    return this;
  }

  build(): IFieldValidation[] {
    return this.validations;
  }
}
