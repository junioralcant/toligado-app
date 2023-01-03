import {
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
  IHttpPostClient,
} from '@data/repositories/http';

export class HttpPostClientSpy<R> implements IHttpPostClient<R> {
  url?: string;
  body?: object;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostParams): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return this.response;
  }
}
