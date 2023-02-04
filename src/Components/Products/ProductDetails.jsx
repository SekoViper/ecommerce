import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FcPrevious } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/ProductSlice';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const dispatch = useDispatch();

  const {
    title, description, price, image, category,
  } = product;

  return (
    <div className="mx-5">
      <div>
        <NavLink to="/">
          {' '}
          <FcPrevious />
          {' '}
        </NavLink>
      </div>
      <div className="lg:flex lg:items-center lg:mx-12 lg:gap-5 p-5 bg-white rounded-lg mt-5">
        <div className="text-center">
          <img className="lg:w-1/2" src={image} alt={title} />
        </div>
        <div>
          <h2 className="font-extrabold text-xl my-4">{title}</h2>
          <p className="">{category}</p>
          <p className="font-extrabold my-3 text-xl">
            $
            {' '}
            {price}
            .00
          </p>
          <p>{description}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            type="button"
            className="rounded-none bg-green-700 px-2 py-1 my-3 uppercase font-bold text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
