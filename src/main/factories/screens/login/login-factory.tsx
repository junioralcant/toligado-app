import { RemoteAuthenticationUseCase } from '@data/usecases/authentication/remote-authentication.usecase';
import { AsyncStorageAdapter } from '@infra/async-storage/asyn-storage-adapter';
import { AxiosHttpClient } from '@infra/http/axios-http-client/axios-http-client';
import { makeApiUrlFactory } from '@main/factories/services/api-url-factory';
import { Login } from '@presentation/screens/Login';
import { makeLoginValidationFactory } from './login-validation-factory';

export function MakeLoginFactory() {
  const url = makeApiUrlFactory('/sessions');
  const axiosHttpClient = new AxiosHttpClient();
  const remoteAuthentication = new RemoteAuthenticationUseCase(
    url,
    axiosHttpClient
  );
  const validationComposite = makeLoginValidationFactory();
  const asyncStorage = new AsyncStorageAdapter();

  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
      asyncStorage={asyncStorage}
    />
  );
}
