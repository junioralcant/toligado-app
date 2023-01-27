import { ReactNode, useContext, useEffect, useState } from 'react';
import { IAuthentication } from '@domain/usecases';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter,
} from '@main/adapters/current-account-adapter';
import { AccountContext } from '@presentation/context/account/account-context';

export type PropsProvider = {
  children: ReactNode;
};

function AccountProvider({ children }: PropsProvider) {
  const [account, setAccount] = useState<IAuthentication.Model>();

  useEffect(() => {
    async function loadingAccount() {
      const account = await getCurrentAccountAdapter();
      setAccount(account);
    }

    loadingAccount();
  }, [account]);

  function setCurrentAccount(account: IAuthentication.Model | undefined) {
    setCurrentAccountAdapter(account as IAuthentication.Model);
    setAccount(account);
  }

  return (
    <AccountContext.Provider value={{ setCurrentAccount, account }}>
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useAccount must be used within an AccountContext');
  }

  return context;
}

export { AccountProvider, useAccount };
