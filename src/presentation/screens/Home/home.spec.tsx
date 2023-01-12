import { render, screen } from '@testing-library/react-native';
import theme from '@presentation/styles/theme';
import { Home } from '.';
import { ThemeProvider } from 'styled-components/native';

describe('Home component', () => {
  it('Should show correct components', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    expect(screen.getByText('REGISTAR PERIGO')).toBeTruthy();
    expect(screen.getByText('PERIGO REGISTRADO')).toBeTruthy();
    expect(screen.getByText('SOBRE O APP')).toBeTruthy();
    expect(screen.getByText('Nº DA SORTE')).toBeTruthy();
  });
});
