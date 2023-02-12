import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Men = () => {
  const products = useSelector((state) => state.products);
  const menClothing = products.products.filter((product) => product.category === 'men\'s clothing');
  return (
    <div className="m-4 rounded-lg">
      <h1 className="m-4 text-3xl">
        Men&apos;s clothing
        {' '}
        {menClothing.length}
      </h1>
      <div className="grid grid-cols-2 md-3 col-desktop">
        {menClothing.map((product) => (
          <div key={product.id} className="basis-1/4 bg-white m-1 rounded-lg flex justify-center flex-col text-center items-center p-2 cursor-pointer hover:border border-gray-700">
            <NavLink to={`/product/${product.id}`} state={product}>
              <img
                className="object-contain w-[200px] aspect-square object-contain"
                src={product.img}
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

export default Men;
