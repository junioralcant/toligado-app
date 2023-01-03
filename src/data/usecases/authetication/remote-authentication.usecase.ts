import { IHttpPostClient } from '@data/repositories/http/http-post-client';
import { HttpStatusCode } from '@data/repositories/http/http-response';
import { InvalidCredentialsError } from '@domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@domain/errors/unexpected-error';
import { IAuthentication } from '@domain/usecases/authentication';

export class RemoteAuthenticationUseCase {
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
