import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Women = () => {
  const products = useSelector((state) => state.products);
  const womenClothing = products.products.filter((product) => product.category === 'women\'s clothing');
  return (
    <>
      <h1 className="m-4 text-3xl">
        Women&apos;s clothing
        {' '}
        {womenClothing.length}
      </h1>
      <div className="grid grid-cols-2">
        {womenClothing.map((product) => (
          <div key={product.id} className="basis-1/4 flex justify-center flex-col text-center items-center p-2 cursor-pointer hover:border border-gray-700">
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

    </>
  );
};

export default Women;
