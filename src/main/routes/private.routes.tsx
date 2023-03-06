import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@presentation/screens/Home';
import { RecordCapture } from '@presentation/screens/RecordCapture';

const { Navigator, Screen } = createNativeStackNavigator();
export function PrivateRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="recordCapture" component={RecordCapture} />
      </Navigator>
    </NavigationContainer>
  );
}
