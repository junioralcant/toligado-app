import theme from '@presentation/styles/theme';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Login } from '.';

describe('Login Screen', () => {
  it('Shoul start with inital state disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const inputCPF = screen.getByPlaceholderText('Informe seu CPF');
    const button = screen.getByTestId('LOGIN');
    expect(inputCPF.props.isFocused).toBeFalsy();
    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });
});
