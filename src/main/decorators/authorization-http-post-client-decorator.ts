import {
  HttpPostParams,
  HttpResponse,
  IHttpPostClient,
} from '@data/repositories/http';
import { IGetStorage } from '@data/repositories/local-storage/get-storage';

export class AuthorizationHttpPostClientDecorator implements IHttpPostClient {
  constructor(
    private readonly getStorage: IGetStorage,
    private readonly httpPostClient: IHttpPostClient
  ) {}
  async post(params: HttpPostParams): Promise<HttpResponse<any>> {
    const account = await this.getStorage.get('account');

    if (account?.token) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          Authorization: `Bearer ${account?.token}`,
        }),
      });
    }

    const httpResponse = await this.httpPostClient.post(params);

    return httpResponse;
  }
}
