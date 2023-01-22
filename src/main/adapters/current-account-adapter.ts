import { IAuthentication } from '@domain/usecases';
import { makeAsyncStorageAdapterFactory } from '@main/factories/async-storage/async-storage-adapter';

export function setCurrentAccountAdapter(account: IAuthentication.Model) {
  makeAsyncStorageAdapterFactory().set('account', account);
}
