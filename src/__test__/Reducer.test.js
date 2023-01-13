import store from '../Redux/configureStore';

const initialState = {
  products: [],
  filteredProduct: [],
  status: 'idle',
  error: null,
};

describe('Test reducer function', () => {
  it('Test', () => {
    expect(store.getState().products).toEqual(initialState);
  });
});
