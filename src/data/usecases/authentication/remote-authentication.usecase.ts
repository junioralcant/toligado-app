import { HttpStatusCode, IHttpPostClient } from '@data/repositories/http';
import { InvalidCredentialsError, UnexpectedError } from '@domain/errors';
import { IAuthentication } from '@domain/usecases';

export class RemoteAuthenticationUseCase implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<RemoteAuthenticationUseCase.Model>
  ) {}

  async auth({
    cpf,
  }: IAuthentication.Params): Promise<IAuthentication.Model | undefined> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: { cpf },
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteAuthenticationUseCase {
  export type Model = IAuthentication.Model;
}
