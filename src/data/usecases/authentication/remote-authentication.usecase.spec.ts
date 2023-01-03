import { faker } from '@faker-js/faker';
import { RemoteAuthenticationUseCase } from './remote-authentication.usecase';
import { HttpStatusCode } from '@data/repositories/http/http-response';
import { InvalidCredentialsError, UnexpectedError } from '@domain/errors';
import { mockAccounModel, mockAuthenticationParams } from '@domain/mocks';
import { HttpPostClientSpy } from '@data/mocks';

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

  it('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  it('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('Should return an Authentication.Model if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResul = mockAccounModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResul,
    };

    const response = await sut.auth(mockAuthenticationParams());
    expect(response).toEqual(httpResul);
  });
});
