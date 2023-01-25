import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@presentation/screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createNativeStackNavigator();
export function PrivateRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
