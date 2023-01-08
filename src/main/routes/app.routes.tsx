import React from 'react';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={MakeLoginFactory} />
    </Navigator>
  );
}
