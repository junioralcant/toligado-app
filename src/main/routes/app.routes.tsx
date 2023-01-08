import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MakeLoginFactory } from '../factories/screens/login/login-factory';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={MakeLoginFactory} />
    </Navigator>
  );
}
