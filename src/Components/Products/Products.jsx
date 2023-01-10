const Products = ({ products }) => {
  const {
    id, image, title, price,
  } = products;
  console.log('Products from props', products);
  return (
    <div className="flex flex-wrap">
      {products && products.map((product) => (
        <div key={product.id} className="basis-1/4 flex justify-center flex-col text-center items-center p-8 cursor-pointer hover:border border-gray-700">
          <img
            className="object-contain w-[200px] aspect-square object-contain"
            src={product.image}
            alt="picture1"
          />
          <div className="mt-4 flex flex-col items-center">
            <p className="bg-slate-400 w-fit px-3 py-0.5 rounded-full">{product.category}</p>
            <p>{product.title}</p>
            <p className="font-bold">
              $
              {' '}
              {product.price}
            </p>
          </div>
        </div>
      )) }
    </div>
  );
};

export default Products;
