import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../Redux/ProductSlice';
import Products from './Products';

const ProductsPage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(getProductsData());
    }
  }, [dispatch, products.products.length], products.products.length);
  return (
    products.status === 'Loading' ? <h2>Loading</h2> : <Products products={products.filteredProduct} key={products.products.id} />
  );
};

export default ProductsPage;
