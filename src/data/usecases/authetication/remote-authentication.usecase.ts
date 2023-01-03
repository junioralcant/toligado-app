import { IHttpPostClient } from '@data/repositories/http/http-post-client';
import { IAuthentication } from '@domain/usecases/authentication';

export class RemoteAuthenticationUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth({ cpf }: IAuthentication.Params): Promise<void> {
    this.httpPostClient.post({ url: this.url, body: { cpf } });
  }
}
