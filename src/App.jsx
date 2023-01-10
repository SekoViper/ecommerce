import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import ProductDetails from './Components/Products/ProductDetails';
import ProductsPage from './Components/Products/ProductsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<ProductsPage />} path="/" />
        <Route element={<ProductDetails />} path="/product/:productId" />
      </Routes>
    </Router>
  );
}

export default App;
