import AsyncStorage from '@react-native-async-storage/async-storage';
import { mockAccounModel } from '@domain/mocks';
import { AsyncStorageAdapter } from './asyn-storage-adapter';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

function makeSut(): AsyncStorageAdapter {
  return new AsyncStorageAdapter();
}

describe('AsyncStorageAdapter', () => {
  it('Should call asyncStorage.setTem with correct values', () => {
    const sut = makeSut();
    const key = 'any_key';
    const value = mockAccounModel();

    sut.set(key, value);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it('Should throw error if asyncStorage.setTem throws', async () => {
    const sut = makeSut();
    const key = 'any_key';
    const value = mockAccounModel();

    jest.spyOn(sut, 'set').mockRejectedValueOnce(new Error());
    const promise = sut.set(key, value);

    await expect(promise).rejects.toThrow(new Error());
  });
});
