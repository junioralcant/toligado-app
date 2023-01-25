import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '@presentation/context/api/api-context';

export function useToken(): string {
  const { getCurrentAccount } = useContext(ApiContext);

  const [account, setAccount] = useState('');

  useEffect(() => {
    async function test() {
      const account = await getCurrentAccount();
      setAccount(account.token);
    }

    test();
  }, [account]);

  return account;
}
