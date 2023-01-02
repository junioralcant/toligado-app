import { HttpPostClientSpy } from '../../mocks/mock-http-post';
import { RemoteAuthenticationUseCase } from './remote-authentication.usecase';

describe('RemoteAuthenticationUseCase', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthenticationUseCase(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
