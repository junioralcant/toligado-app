import { HttpPostClientSpy } from '@data/mocks';
import { AuthorizationHttpPostClientDecorator } from '@main/decorators/authorization-http-post-client-decorator';
import { AsyncStorageAdapterMock } from '@presentation/mocks';

type SutType = {
  getAsyncStorage: AsyncStorageAdapterMock;
  httpPostClient: HttpPostClientSpy<any>;
  sut: AuthorizationHttpPostClientDecorator;
};

function makeSut(): SutType {
  const getAsyncStorage = new AsyncStorageAdapterMock();
  const httpPostClient = new HttpPostClientSpy();
  const sut = new AuthorizationHttpPostClientDecorator(
    getAsyncStorage,
    httpPostClient
  );

  return {
    getAsyncStorage,
    httpPostClient,
    sut,
  };
}

describe('AuthorizationHttpPostClientDecorator', () => {
  it('Should call GetStorage with correct value', () => {
    const {} = makeSut();
  });
});
