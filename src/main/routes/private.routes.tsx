import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@presentation/screens/Home';
import { MakeLoginFactory } from '@main/factories/screens/login/login-factory';
import { MakeRecordCaptureFactory } from '@main/factories/screens/record-capture/record-capture-factory';

const { Navigator, Screen } = createNativeStackNavigator();
export function PrivateRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="recordCapture" component={MakeRecordCaptureFactory} />
      </Navigator>
    </NavigationContainer>
  );
}
