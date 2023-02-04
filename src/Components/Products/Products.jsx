import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Products = ({ products }) => (
  <div className="mx-5">
    <div className="grid grid-cols-2 col-desktop">
      {products && products.map((product) => (
        <div key={product.id} className="basis-1/4 bg-white m-1 rounded-lg flex justify-center flex-col text-center items-center p-2 cursor-pointer hover:border border-gray-700">
          <NavLink to={`/product/${product.id}`} state={product}>
            <img
              className="object-contain aspect-square object-contain"
              src={product.image}
              alt="picture1"
            />
            <div className="mt-4 flex flex-col text-center items-center">
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

Products.defaultProps = { products: null };
Products.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    length: PropTypes.number,
    map: PropTypes.string,
  }),
};

export default Products;
