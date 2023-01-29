import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { mockAccounModel } from '@domain/mocks';
import { IAuthentication } from '@domain/usecases';
import { AccountContext } from '@presentation/context/account/account-context';
import theme from '@presentation/styles/theme';
import { Routes } from './index';

function makeSut(account: IAuthentication.Model | undefined = undefined) {
  render(
    <AccountContext.Provider
      value={{
        setCurrentAccount: jest.fn(),
        account: account,
      }}
    >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AccountContext.Provider>
  );
}

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Rotues', () => {
  it('Should show component on screen Login if account is undefined', () => {
    makeSut();
    expect(screen.getByTestId('LOGIN')).toBeTruthy();
  });

  it('Should show component REGISTAR PERIGO on screen Home if account is not undefined', () => {
    makeSut(mockAccounModel());
    expect(screen.getByText('REGISTAR PERIGO')).toBeTruthy();
  });
});
