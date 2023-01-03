import {
  HttpPostParams,
  HttpResponse,
  IHttpPostClient,
} from '@data/repositories/http';
import axios from 'axios';

export class AxiosHttpClient implements IHttpPostClient {
  async post(params: HttpPostParams): Promise<HttpResponse<any>> {
    await axios.post(params.url, params.body);
    return {
      statusCode: 200,
      body: {},
    };
  }
}
