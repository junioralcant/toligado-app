import { IAuthentication } from '@domain/usecases';
import { createContext } from 'react';

type Props = {
  setCurrentAccount: (account: IAuthentication.Model | undefined) => void;
  account: IAuthentication.Model | undefined;
};

export const AccountContext = createContext<Props>(null as any);
