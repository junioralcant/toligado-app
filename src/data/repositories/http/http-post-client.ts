import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: any;
  headers?: any;
};

export interface IHttpPostClient<R = any> {
  post(params: HttpPostParams): Promise<HttpResponse<R>>;
}
