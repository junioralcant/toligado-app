import { HttpStatusCode, IHttpPostClient } from '@data/repositories/http';
import { UnexpectedError } from '@domain/errors';
import { ICreateRecord } from '@domain/usecases';

export class RemoteCreateRecordUseCase implements ICreateRecord {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async create(params: ICreateRecord.Params): Promise<void> {
    const response = await this.httpPostClient.post({ url: this.url });
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      default:
        throw new UnexpectedError();
    }
  }
}
