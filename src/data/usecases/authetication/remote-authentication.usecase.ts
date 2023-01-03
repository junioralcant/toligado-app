import { IHttpPostClient } from '@data/repositories/http/http-post-client';
import { HttpStatusCode } from '@data/repositories/http/http-response';
import { InvalidCredentialsError } from '@domain/errors/invalid-credentials-error';
import { IAuthentication } from '@domain/usecases/authentication';

export class RemoteAuthenticationUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth({ cpf }: IAuthentication.Params): Promise<void> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: { cpf },
    });

    switch (response.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
    }
  }
}
