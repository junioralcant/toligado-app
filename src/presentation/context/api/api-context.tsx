import { createContext } from 'react';
import { IAuthentication } from '@domain/usecases';

type Props = {
  setCurrentAccount(account: IAuthentication.Model | undefined): void;
  getCurrentAccount(): Promise<IAuthentication.Model> | IAuthentication.Model;
};

export const ApiContext = createContext<Props>(null as any);
