import {
  HttpPostParams,
  HttpResponse,
  IHttpPostClient,
} from '@data/repositories/http';
import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements IHttpPostClient {
  async post(params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.post(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return this.adapt(axiosResponse);
  }

  private adapt(axiosResponse: AxiosResponse): HttpResponse {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
