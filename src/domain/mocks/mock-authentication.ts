import { IAuthentication } from '../usecases/authentication';
export function mockAuthenticationParams(): IAuthentication.Params {
  return {
    cpf: '788.755.890-54',
  };
}
