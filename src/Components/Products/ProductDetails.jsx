import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FcPrevious } from 'react-icons/fc';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="mx-5">
      <div>
        <NavLink to="/">
          {' '}
          <FcPrevious />
          {' '}
        </NavLink>
      </div>
      <div className="lg:flex p-5">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h2 className="font-extrabold text-xl my-4">{product.title}</h2>
          <p className="">{product.category}</p>
          <p className="font-extrabold my-3 text-xl">
            $
            {' '}
            {product.price}
            .00
          </p>
          <p>{product.description}</p>
          <button type="button" className="rounded-none bg-green-700 px-2 py-1 my-3 uppercase font-bold text-white">Add To Cart</button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
