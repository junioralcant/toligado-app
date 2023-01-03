import { HttpPostParams } from '@data/repositories/http';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

type SutTypes = {
  sut: AxiosHttpClient;
};

function makeSut(): SutTypes {
  const sut = new AxiosHttpClient();
  return {
    sut,
  };
}

function mockPostParams(): HttpPostParams {
  return {
    url: faker.internet.url(),
    body: faker.datatype.json(),
  };
}

describe('AxiosHttpClient', () => {
  it('Shoul call axios.post with correct URL body and verb', async () => {
    const request = mockPostParams();
    const { sut } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
});
