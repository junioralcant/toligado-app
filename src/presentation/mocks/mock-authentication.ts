import { mockAccounModel } from '@domain/mocks';
import { IAuthentication } from '@domain/usecases';

export class AuthenticationSpy implements IAuthentication {
  account = mockAccounModel();
  params: IAuthentication.Params = {
    cpf: '',
  };

  async auth(
    params: IAuthentication.Params
  ): Promise<IAuthentication.Model | undefined> {
    this.params = params;
    return this.account;
  }
}
