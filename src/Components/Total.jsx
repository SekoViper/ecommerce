import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Total = () => {
  const cartItems = useSelector((state) => state.products.cart);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Cart Total</h3>
      {cartItems.length > 0 ? (
        <>
          <p>
            Total Items:
            {totalQuantity}
          </p>
          <p>
            Total Price: $
            {totalPrice.toFixed(2)}
          </p>
          <button
            type="button"
            className="rounded-none bg-red-700 px-2 py-1 my-3 uppercase font-bold text-white"
          >
            Checkout
          </button>
        </>
      ) : (
        <>
          <p>No items in cart</p>
          <p>
            <Link to="/" className="text-blue-500">
              Continue shopping
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Total;
