import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Total from './Total';

const CartPage = () => {
  const cart = useSelector((state) => state.products);
  return (
    <div className="m-5 lg:flex lg:justify-between lg:gap-10 md:gap-10 md:flex md:justify-between lg:mx-32 md:mx-1/4">
      <div className="cart__left md:w-3/4 lg:w-3/4">
        <div>
          <h3>Shopping Cart</h3>
        </div>
        {cart.cart?.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={cart.quantity}
          />
        ))}
      </div>

      <div className="cart__right w-1/4">
        <Total />
      </div>

    </div>
  );
};

export default CartPage;
