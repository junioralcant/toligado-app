import { IAuthentication } from '@domain/usecases';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter,
} from '@main/adapters/current-account-adapter';
import { ApiContext } from '@presentation/context/api/api-context';
import { useToken } from '@presentation/hooks/use-token';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes } from './private.routes';
import { PublicRoutes } from './public.routes';

export function Routes() {
  const account = useToken();
  return account ? <PrivateRoutes /> : <PublicRoutes />;
}
