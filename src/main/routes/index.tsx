import { useAccount } from '@presentation/hooks/use-token';
import { PrivateRoutes } from './private.routes';
import { PublicRoutes } from './public.routes';

export function Routes() {
  const { account } = useAccount();
  return account ? <PrivateRoutes /> : <PublicRoutes />;
}
