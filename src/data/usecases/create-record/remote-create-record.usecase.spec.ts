import { faker } from '@faker-js/faker';
import { HttpPostClientSpy } from '@data/mocks';
import { RemoteCreateRecordUseCase } from './remote-create-record.usecase';

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
    await sut.create();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
