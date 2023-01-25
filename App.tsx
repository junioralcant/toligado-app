import { ThemeProvider } from 'styled-components';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '@presentation/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from '@main/routes';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter,
} from '@main/adapters/current-account-adapter';
import { ApiContext } from '@presentation/context/api/api-context';

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
    <ThemeProvider theme={theme}>
      <ApiContext.Provider
        value={{
          setCurrentAccount: setCurrentAccountAdapter,
          getCurrentAccount: getCurrentAccountAdapter,
        }}
      >
        <Routes />
      </ApiContext.Provider>
    </ThemeProvider>
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
