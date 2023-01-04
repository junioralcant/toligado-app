import { ThemeProvider } from 'styled-components';
import { StyleSheet, View } from 'react-native';
import { Login } from '@presentation/screens/login';
import theme from '@presentation/styles/theme';

export default function App() {
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
