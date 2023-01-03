import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: object;
};

export interface IHttpPostClient<R = any> {
  post(params: HttpPostParams): Promise<HttpResponse<R>>;
}
