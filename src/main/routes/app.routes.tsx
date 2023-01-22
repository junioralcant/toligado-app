import React from 'react';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@presentation/screens/Home';
import { ApiContext } from '@presentation/context/api/api-context';
import { IAuthentication } from '@domain/usecases';
import { AsyncStorageAdapter } from '@infra/async-storage/asyn-storage-adapter';
import { makeAsyncStorageAdapterFactory } from '@main/factories/async-storage/async-storage-adapter';

const { Navigator, Screen } = createNativeStackNavigator();

function setCurrentAccountAdapter(account: IAuthentication.Model) {
  makeAsyncStorageAdapterFactory().set('account', account);
}

export function AppRoutes() {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
      }}
    >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="login" component={MakeLoginFactory} />
        <Screen name="home" component={Home} />
      </Navigator>
    </ApiContext.Provider>
  );
}
