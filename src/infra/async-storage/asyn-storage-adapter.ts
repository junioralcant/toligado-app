import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISetStorage } from '@data/repositories/local-storage';
import { IGetStorage } from '../../data/repositories/local-storage/get-storage';

export class AsyncStorageAdapter implements ISetStorage, IGetStorage {
  async set(key: string, value: object): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    const response = await AsyncStorage.getItem(key);
    return JSON.parse(response as string);
  }
}
