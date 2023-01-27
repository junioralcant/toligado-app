import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISetStorage } from '@data/repositories/local-storage';
import { IGetStorage } from '../../data/repositories/local-storage/get-storage';

export class AsyncStorageAdapter implements ISetStorage, IGetStorage {
  async set(key: string, value: object | undefined): Promise<void> {
    if (value) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(key);
    }
  }

  async get(key: string): Promise<any> {
    const response = await AsyncStorage.getItem(key);
    return JSON.parse(response as string);
  }
}
