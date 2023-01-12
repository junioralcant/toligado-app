import { render, screen } from '@testing-library/react-native';
import { Home } from '.';

describe('Home component', () => {
  it('Should show correct components', () => {
    render(<Home />);
    expect(screen.getByText('REGISTAR PERIGO')).toBeTruthy();
    expect(screen.getByText('PERIGO REGISTRADO')).toBeTruthy();
    expect(screen.getByText('SOBRE O APP')).toBeTruthy();
    expect(screen.getByText('Nº DA SORTE')).toBeTruthy();
  });
});
