import { fireEvent, render, screen } from '@testing-library/react-native';
import theme from '@presentation/styles/theme';
import { Home } from '.';
import { ThemeProvider } from 'styled-components/native';
import { mockAccounModel } from '@domain/mocks';
import { IAuthentication } from '@domain/usecases';
import { AccountContext } from '@presentation/context/account/account-context';
import { useNavigation } from '@react-navigation/native';

type SutTypes = {
  setCurrentAccountMock: (account: IAuthentication.Model) => void;
};

function makeSut(): SutTypes {
  const setCurrentAccountMock = jest.fn();
  render(
    <AccountContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountMock,
        account: mockAccounModel(),
      }}
    >
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </AccountContext.Provider>
  );

  return {
    setCurrentAccountMock,
  };
}

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@react-navigation/native', () => {
  const mockedNavigate = jest.fn();

  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home component', () => {
  it('Should show correct components', () => {
    makeSut();
    expect(screen.getByText('REGISTAR PERIGO')).toBeTruthy();
    expect(screen.getByText('PERIGO REGISTRADO')).toBeTruthy();
    expect(screen.getByText('SOBRE O APP')).toBeTruthy();
    expect(screen.getByText('Nº DA SORTE')).toBeTruthy();
  });

  it('Should call setCurrentAccount with undefined value', () => {
    const { setCurrentAccountMock } = makeSut();
    fireEvent.press(screen.getByTestId('logout'));
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined);
  });

  it('Should navigate to screen Record Capture', () => {
    makeSut();

    fireEvent.press(screen.getByTestId('record-capture'));
    const navigation = useNavigation();
    expect(navigation.navigate).toHaveBeenCalledWith('recordCapture');
  });
});
