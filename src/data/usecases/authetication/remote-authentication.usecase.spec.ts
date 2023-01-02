import { HttpPostClientSpy } from '../../mocks/mock-http-post';
import { RemoteAuthenticationUseCase } from './remote-authentication.usecase';
import { faker } from '@faker-js/faker';
import { mockAuthenticationParams } from '../../../domain/mocks/mock-authentication';

type SutTypes = {
  httpPostClientSpy: HttpPostClientSpy;
  sut: RemoteAuthenticationUseCase;
};

function makeSut(url = faker.internet.url()): SutTypes {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthenticationUseCase(url, httpPostClientSpy);

  return {
    httpPostClientSpy,
    sut,
  };
}

describe('RemoteAuthenticationUseCase', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthenticationParams());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('Should call HttpClient with correct body', async () => {
    const body = mockAuthenticationParams();
    const { sut, httpPostClientSpy } = makeSut();
    await sut.auth(body);
    expect(httpPostClientSpy.body).toEqual(body);
  });
});
