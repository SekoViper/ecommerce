import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Products from '../Components/Products/Products';
import ProductsPage from '../Components/Products/ProductsPage';

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('Test Home component rendering', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Test product component rendering on homepage', () => {
    useSelector.mockReturnValue({
      products: [
        {
          category: 'electronics',
          description: 'test',
          id: 14,
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: 999.99,
          title: 'title',
          rating: {
            rate: 2.2,
            count: 140,
          },
        },
      ],
    });
    const tree = render(<Products />);
    expect(tree).toMatchSnapshot();
  });

  test('Test product page component rendering', () => {
    useSelector.mockReturnValue({
      products: [
        {
          category: 'electronics',
          description: 'test',
          id: 14,
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: 999.99,
          title: 'title',
          rating: {
            rate: 2.2,
            count: 140,
          },
        },
      ],
    });
    const tree = render(<ProductsPage />);
    expect(tree).toMatchSnapshot();
  });
});
