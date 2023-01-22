import { AsyncStorageAdapter } from '@infra/async-storage/asyn-storage-adapter';

export function makeAsyncStorageAdapterFactory(): AsyncStorageAdapter {
  return new AsyncStorageAdapter();
}
