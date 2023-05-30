import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({
  title, price, image, quantity,
}) => (
  <div className="flex items-center gap-5 my-8">
    <img className="lg:max-w-md md:w-1/4 w-2/4" src={image} alt={title} />
    <div className="cartItem__info">
      <button type="button" className="bg-[red] px-3 py-1 text-white">
        X
      </button>
      <p className="font-bold">{title}</p>
      <div className="flex justify-around border-slate-800 border my-2">
        <button type="button">-</button>
        <p className="border-x px-4 border-slate-800">{quantity}</p>
        <button type="button">+</button>
      </div>
      <p className="cartItem__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  </div>
);

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
