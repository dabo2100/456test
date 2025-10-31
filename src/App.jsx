import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DasboardPage from './pages/DasboardPage';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <div className="w-full h-dvh flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* /product/productId */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/dashboard" element={<DasboardPage />} />
          <Route path="*" element={<h1>Error 404 | Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// Static Route
// 100 Product => 100 Route
// dynamic Route
