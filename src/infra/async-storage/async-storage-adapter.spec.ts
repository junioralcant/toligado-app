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
});
