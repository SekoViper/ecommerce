import React from 'react';

const CartItem = ({
  id, title, price, image, quantity,
}) => {
  console.log('cart item');
  return (
    <div className="flex items-center gap-5 my-8">
      <img className="lg:max-w-md md:w-1/4 w-2/4" src={image} alt={title} />
      <div className="cartItem__info">
        <button type="button" className="bg-[red] px-3 py-1 text-white">X</button>
        <p className="font-bold">{title}</p>
        <div className="flex justify-around border-slate-800 border my-2">
          <button type="button">-</button>
          <p className=" border-x px-4 border-slate-800">{quantity}</p>
          <button type="button">+</button>
        </div>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
