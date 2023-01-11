import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';

describe('Test Header', () => {
  test('should Test header component', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
