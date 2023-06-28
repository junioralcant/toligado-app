import { ISetStorage } from '@data/repositories/local-storage';
import { IGetStorage } from '@data/repositories/local-storage/get-storage';

export class AsyncStorageAdapterMock implements ISetStorage, IGetStorage {
  key = '';
  value = {};

  async set(key: string, value: object): Promise<void> {
    this.key = key;
    this.value = value;
  }

  get(key: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
