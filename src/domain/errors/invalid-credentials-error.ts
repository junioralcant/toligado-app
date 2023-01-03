export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credentciais inválidas');
    this.name = 'InvalidCredentilsError';
  }
}
