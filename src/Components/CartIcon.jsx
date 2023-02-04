import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = () => {
  const cart = useSelector((state) => state.products.cart);
  const navigate = useNavigate();
  const getTotalQuantity = () => cart.length;

  return (
    <button
      type="button"
      className="shopping-cart bg-[black] relative text-white px-25 py-25 rounded-full fixed"
      onClick={() => navigate('/cart')}
    >
      <ShoppingCartIcon id="cartIcon" />
      <p className="absolute top-0 right-0 bg-[red] text-white py-4 px-4 rounded-full">{getTotalQuantity() || 0}</p>
    </button>
  );
};

export default CartIcon;
