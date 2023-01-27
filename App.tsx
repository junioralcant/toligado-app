import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '@presentation/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from '@main/routes';
import { AppProvider } from '@presentation/hooks';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={theme.colors.background_primary} />
      </View>
    );
  }

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
