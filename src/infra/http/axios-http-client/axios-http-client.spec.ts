import { HttpPostParams } from '@data/repositories/http';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedAxiosResponse = {
  data: faker.datatype.json(),
  status: faker.datatype.number(),
};

mockedAxios.post.mockResolvedValue(mockedAxiosResponse);
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

  it('Shoul retun correct resonse on axios.post', async () => {
    const request = mockPostParams();
    const { sut } = makeSut();
    const response = await sut.post(request);
    const axiosResponse = await mockedAxios.post.mock.results[0].value;

    expect(response).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });
});
