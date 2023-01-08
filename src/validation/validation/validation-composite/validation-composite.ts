import { IValidation } from '@presentation/repositories/validation';
import { IFieldValidation } from '@validation/repositories/field-validation';

export class ValidationComposite implements IValidation {
  private constructor(private readonly validators: IFieldValidation[]) {}

  static build(validations: IFieldValidation[]): ValidationComposite {
    return new ValidationComposite(validations);
  }

  validate(input: object): string {
    const returnNameObjects = Object.keys(input);
    const fieldName = returnNameObjects[0] as keyof typeof input;

    const validators = this.validators.filter((v) => v.field === fieldName);

    for (const validator of validators) {
      const error = validator.validate(input[fieldName]);
      if (error) {
        return error.message;
      }
    }

    return '';
  }
}
