import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { ValidationSpy } from '@presentation/mocks';
import theme from '@presentation/styles/theme';
import { Login } from '.';
import { faker } from '@faker-js/faker';

type SutTypes = {
  validationSpy: ValidationSpy;
};

function makeSut(): SutTypes {
  const validationSpy = new ValidationSpy();
  validationSpy.errorMessage = faker.random.words();
  render(
    <ThemeProvider theme={theme}>
      <Login validation={validationSpy} />
    </ThemeProvider>
  );

  return { validationSpy };
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
});
