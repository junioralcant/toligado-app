import { ThemeProvider } from 'styled-components';
import theme from '@presentation/styles/theme';
import { AccountProvider, PropsProvider } from './use-token';

export function AppProvider({ children }: PropsProvider) {
  return (
    <ThemeProvider theme={theme}>
      <AccountProvider>{children}</AccountProvider>
    </ThemeProvider>
  );
}
