import AsyncStorage from '@react-native-async-storage/async-storage';
import { ISetStorage } from '@data/repositories/local-storage';

export class AsyncStorageAdapter implements ISetStorage {
  async set(key: string, value: object): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
}
