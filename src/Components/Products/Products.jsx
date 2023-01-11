import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../Redux/ProductSlice';

const Products = ({ products }) => {
  const dispatch = useDispatch();

  console.log('Products from props', products.length);
  return (
    <div>
      <form className="w-4/5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search..."
            required
            onChange={(e) => { dispatch(searchProduct(e.target.value)); }}
          />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      <h3 className="m-4">
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
