import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createNativeStackNavigator();
export function PublicRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="login" component={MakeLoginFactory} />
      </Navigator>
    </NavigationContainer>
  );
}
