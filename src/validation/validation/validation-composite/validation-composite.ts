import { IValidation } from '@presentation/repositories/validation';
import { IFieldValidation } from '@validation/repositories/field-validation';

export class ValidationComposite implements IValidation {
  private constructor(private readonly validators: IFieldValidation[]) {}

  static build(validations: IFieldValidation[]): ValidationComposite {
    return new ValidationComposite(validations);
  }

  validate(input: object): string {
    const returnNameObjects = Object.keys(input);

    const validators = this.validators.filter(
      (v) => v.field === returnNameObjects[0]
    );
    for (const validator of validators) {
      const error = validator.validate(returnNameObjects[0]);
      if (error) {
        return error.message;
      }
    }

    return '';
  }
}
