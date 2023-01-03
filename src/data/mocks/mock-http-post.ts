import {
  HttpPostParams,
  IHttpPostClient,
} from '@data/repositories/http/http-post-client';
import {
  HttpResponse,
  HttpStatusCode,
} from '@data/repositories/http/http-response';

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
