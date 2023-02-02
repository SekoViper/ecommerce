import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';

import Header from './Components/Header';
import Electronics from './Components/Products/Categories/Electronics';
import Jewelery from './Components/Products/Categories/Jewelery';
import Men from './Components/Products/Categories/Men';
import Women from './Components/Products/Categories/Women';
import ProductDetails from './Components/Products/ProductDetails';
import ProductsPage from './Components/Products/ProductsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<ProductsPage />} path="/" />
        <Route element={<ProductDetails />} path="/product/:productId" />
        <Route element={<Jewelery />} path="/Jewelery" />
        <Route element={<Men />} path="/men" />
        <Route element={<Women />} path="/women" />
        <Route element={<Electronics />} path="/electronics" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>
    </Router>
  );
}

export default App;
