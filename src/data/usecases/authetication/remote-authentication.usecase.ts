import { IHttpPostClient } from '../../repositories/http/http-post-client';

export class RemoteAuthenticationUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClientSpy: IHttpPostClient
  ) {}

  async auth(): Promise<void> {
    this.httpPostClientSpy.post({ url: this.url });
  }
}
