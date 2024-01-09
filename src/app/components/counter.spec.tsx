import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Counter from '../components/counter';
 
describe('Counter', () => {
  it('should render', () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  it('should have btn', () => {
    render(<Counter />)
    const btn = screen.getByTestId('buttonCount');
    expect(btn).toBeInTheDocument();
  });
});
