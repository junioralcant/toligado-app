import { ThemeProvider } from 'styled-components';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Login } from '@presentation/screens/Login';
import theme from '@presentation/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

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
      <View style={styles.container}>
        <Login />
      </View>
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
