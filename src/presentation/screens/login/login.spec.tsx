import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { ValidationSpy } from '@presentation/mocks';
import theme from '@presentation/styles/theme';
import { Login } from '.';
import { faker } from '@faker-js/faker';
import { IAuthentication } from '@domain/usecases';
import { mockAccounModel } from '@domain/mocks';

class AuthenticationSpy implements IAuthentication {
  account = mockAccounModel();
  params: IAuthentication.Params = {
    cpf: '',
  };

  async auth(
    params: IAuthentication.Params
  ): Promise<IAuthentication.Model | undefined> {
    this.params = params;
    return this.account;
  }
}

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
});
