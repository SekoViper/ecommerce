import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Jewelery = () => {
  const products = useSelector((state) => state.products);
  const Jewelery = products.products.filter((product) => product.category === 'jewelery');
  return (
    <div className="m-4">
      <h1 className="m-4 text-3xl">
        Jewelries
        {' '}
        {Jewelery.length}
      </h1>
      <div className="grid grid-cols-2">
        {Jewelery.map((product) => (
          <div key={product.id} className="basis-1/4 bg-white m-1 rounded-lg flex flex justify-center flex-col text-center items-center p-2 cursor-pointer hover:border border-gray-700">
            <NavLink to={`/product/${product.id}`} state={product}>
              <img
                className="object-contain w-[200px] aspect-square object-contain"
                src={product.image}
                alt="picture1"
              />
              <div className="mt-4 flex flex-col items-center">
                <p className="font-bold">{product.category}</p>
                <p>{product.title}</p>
                <p className="font-extrabold">
                  $
                  {' '}
                  {product.price}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Jewelery;
