import { IHttpPostClient } from '../repositories/http/http-post-client';

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
  }
}
