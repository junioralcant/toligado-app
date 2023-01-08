import { RemoteAuthenticationUseCase } from '@data/usecases/authentication/remote-authentication.usecase';
import { AxiosHttpClient } from '@infra/http/axios-http-client/axios-http-client';
import { Login } from '@presentation/screens/Login';
import { ValidationBuilder, ValidationComposite } from '@validation/validation';
import { makeApiUrlFactory } from '../../services/api-url-factory';

export function MakeLoginFactory() {
  const url = makeApiUrlFactory('/sessions');
  const axiosHttpClient = new AxiosHttpClient();
  const remoteAuthentication = new RemoteAuthenticationUseCase(
    url,
    axiosHttpClient
  );
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('cpf').required().cpf().build(),
  ]);

  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  );
}
