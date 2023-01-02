import { render, screen } from '@testing-library/react-native';
import App from './App';

describe('', () => {
  it('Should return title To Ligado', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    expect(title.props.children).toEqual('To Ligado');
  });
});
