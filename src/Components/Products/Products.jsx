import { NavLink } from 'react-router-dom';

const Products = ({ products }) => {
  const {
    id, image, title, price,
  } = products;
  console.log('Products from props', products.length);
  return (
    <div>
      <h3 className='m-4'>
        Total Stocks:
        {' '}
        {products.length}
      </h3>
      <div className="grid grid-cols-2">
        {products && products.map((product) => (
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
        )) }
      </div>
    </div>
  );
};

export default Products;
