import { IHttpPostClient } from '@data/repositories/http';
import { AsyncStorageAdapter } from '@infra/async-storage/asyn-storage-adapter';
import { AxiosHttpClient } from '@infra/http/axios-http-client/axios-http-client';
import { AuthorizationHttpPostClientDecorator } from '@main/decorators/authorization-http-post-client-decorator';

export function makeAuthorizationHttpPostClientDecoratorFactory(): IHttpPostClient {
  const asyncStorage = new AsyncStorageAdapter();
  const httpPostClient = new AxiosHttpClient();
  return new AuthorizationHttpPostClientDecorator(asyncStorage, httpPostClient);
}
