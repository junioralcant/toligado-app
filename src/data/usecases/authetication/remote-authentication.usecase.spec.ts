import { HttpPostClientSpy } from '../../mocks/mock-http-post';
import { IHttpPostClient } from '../../repositories/http/http-post-client';
import { RemoteAuthenticationUseCase } from './remote-authentication.usecase';

type SutTypes = {
  httpPostClientSpy: HttpPostClientSpy;
  sut: RemoteAuthenticationUseCase;
};

function makeSut(url = 'any_url'): SutTypes {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthenticationUseCase(url, httpPostClientSpy);

  return {
    httpPostClientSpy,
    sut,
  };
}

describe('RemoteAuthenticationUseCase', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = 'ather_url';
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
