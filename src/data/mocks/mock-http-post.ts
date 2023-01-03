import {
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
  IHttpPostClient,
} from '@data/repositories/http';

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return this.response;
  }
}
