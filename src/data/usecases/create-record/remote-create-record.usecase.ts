import { HttpStatusCode, IHttpPostClient } from '@data/repositories/http';
import { UnexpectedError } from '@domain/errors';
import { ICreateRecord } from '@domain/usecases';

export class RemoteCreateRecordUseCase implements ICreateRecord {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async create({
    dataImage,
    description,
    place,
    riskCategory,
  }: ICreateRecord.Params): Promise<void> {
    const imageForm = {
      name: dataImage.fileName ? dataImage.fileName : String(Date.now()),
      uri: dataImage.uri,
      type: `${dataImage.type}/${dataImage.uri.split('.').pop()}`,
    };

    const data = new FormData();
    data.append('file', imageForm as unknown as File);
    data.append('description', description);
    data.append('location', place);
    data.append('riskCategory', riskCategory);

    const response = await this.httpPostClient.post({
      url: this.url,
      body: data,
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      default:
        throw new UnexpectedError();
    }
  }
}
