import { fireEvent, render, screen } from '@testing-library/react-native';
import { Input } from '@presentation/components';
import { ContextForm } from '@presentation/context/form';
import { ThemeProvider } from 'styled-components/native';
import theme from '@presentation/styles/theme';

describe('Input component', () => {
  it('Should change status of isFocused', () => {});
  render(
    <ContextForm.Provider value={{ state: {} }}>
      <ThemeProvider theme={theme}>
        <Input label="input" name="input" />
      </ThemeProvider>
    </ContextForm.Provider>
  );
  const input = screen.getByTestId('input');
  expect(input.props.isFocused).toBeFalsy();
  fireEvent(input, 'onFocus');
  expect(input.props.isFocused).toBeTruthy();
  fireEvent(input, 'onBlur');
  expect(input.props.isFocused).toBeFalsy();
});
