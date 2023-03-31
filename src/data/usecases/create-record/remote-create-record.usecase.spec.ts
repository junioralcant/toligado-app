import { faker } from '@faker-js/faker';
import { HttpPostClientSpy } from '@data/mocks';
import { RemoteCreateRecordUseCase } from './remote-create-record.usecase';
import { HttpStatusCode } from '@data/repositories/http';
import { mockCreateRecordParams } from '@domain/mocks';
import { UnexpectedError } from '@domain/errors';

type SutType = {
  sut: RemoteCreateRecordUseCase;
  httpPostClientSpy: HttpPostClientSpy<any>;
};

function makeSut(url = faker.internet.url()): SutType {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteCreateRecordUseCase(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
}

describe('RemoteCreateRecordUseCase', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.create(mockCreateRecordParams());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('Should throw error if HttpPostClient returns 403 ', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    };

    const promise = sut.create(mockCreateRecordParams());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
