import React from 'react';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@presentation/screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={MakeLoginFactory} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
