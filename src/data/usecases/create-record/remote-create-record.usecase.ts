import { IHttpPostClient } from '@data/repositories/http';

export class RemoteCreateRecordUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}
  async create() {
    await this.httpPostClient.post({ url: this.url });
  }
}
