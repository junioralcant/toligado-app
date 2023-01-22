import React from 'react';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@presentation/screens/Home';
import { ApiContext } from '@presentation/context/api/api-context';
import { setCurrentAccountAdapter } from '@main/adapters/current-account-adapter';

const { Navigator, Screen } = createNativeStackNavigator();

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
