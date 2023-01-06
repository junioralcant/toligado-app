import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { faker } from '@faker-js/faker';
import { ThemeProvider } from 'styled-components/native';
import { AuthenticationSpy, ValidationSpy } from '@presentation/mocks';
import theme from '@presentation/styles/theme';
import { Login } from '.';
import { InvalidCredentialsError } from '@domain/errors';

type SutTypes = {
  validationSpy: ValidationSpy;
  authenticationSpy: AuthenticationSpy;
};

function makeSut(): SutTypes {
  const validationSpy = new ValidationSpy();
  const authenticationSpy = new AuthenticationSpy();
  validationSpy.errorMessage = faker.random.words();
  render(
    <ThemeProvider theme={theme}>
      <Login validation={validationSpy} authentication={authenticationSpy} />
    </ThemeProvider>
  );

  return { validationSpy, authenticationSpy };
}

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('Login Screen', () => {
  it('Should start with inital state disabled', () => {
    makeSut();
    const inputCPF = screen.getByTestId('cpf');
    const button = screen.getByTestId('LOGIN');
    expect(inputCPF.props.isFocused).toBeFalsy();
    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });

  it('Should anable input if is focused', () => {
    makeSut();
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'focus');
    expect(inputCPF.props.isFocused).toBeTruthy();
  });

  it('Should call Validation with correct value', () => {
    const { validationSpy } = makeSut();
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    expect(validationSpy.input).toEqual({
      cpf: '04404040460',
    });
  });

  it('Should return disabled button if cpf error Validation fails', () => {
    const { validationSpy } = makeSut();
    const errorMessage = faker.random.words();
    validationSpy.errorMessage = errorMessage;
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });

  it('Should anabled button if cpf Validation succeeds', () => {
    const { validationSpy } = makeSut();
    validationSpy.errorMessage = '';
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    expect(button.props.accessibilityState.disabled).toBeFalsy();
  });

  it('Should show loading on button click', () => {
    const { validationSpy } = makeSut();
    validationSpy.errorMessage = '';
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    fireEvent.press(button);
    const loading = screen.getByTestId('loading');
    expect(loading).toBeTruthy();
  });

  it('Should call Authentication with correct value', () => {
    const { validationSpy, authenticationSpy } = makeSut();
    const cpf = '04404040460';
    validationSpy.errorMessage = '';
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    fireEvent.press(button);
    expect(authenticationSpy.params).toEqual({
      cpf,
    });
  });

  it('Should present error if Authentication fails', async () => {
    const { validationSpy, authenticationSpy } = makeSut();
    validationSpy.errorMessage = '';
    jest
      .spyOn(authenticationSpy, 'auth')
      .mockResolvedValueOnce(Promise.reject(new InvalidCredentialsError()));
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    fireEvent.press(button);

    await waitFor(() => {
      const errorComponent = screen.getByTestId('error');
      expect(errorComponent).toBeTruthy();
    });
  });

  it('Should add accessToken to localstorage if Authentication on success', async () => {
    const { validationSpy, authenticationSpy } = makeSut();
    validationSpy.errorMessage = '';
    const inputCPF = screen.getByTestId('cpf');
    fireEvent(inputCPF, 'onChangeText', '04404040460');
    const button = screen.getByTestId('LOGIN');
    fireEvent.press(button);

    await waitFor(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        'accessToken',
        JSON.stringify(authenticationSpy.account)
      );
    });
  });
});
