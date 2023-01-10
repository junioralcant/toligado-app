import { ISetStorage } from '@data/repositories/local-storage';

export class AsyncStorageAdapterMock implements ISetStorage {
  key = '';
  value = {};

  async set(key: string, value: object): Promise<void> {
    this.key = key;
    this.value = value;
  }
}
