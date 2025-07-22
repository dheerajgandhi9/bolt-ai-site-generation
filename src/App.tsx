import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/components/pages/HomePage';
import { ProductsPage } from '@/components/pages/ProductsPage';
import { ProductDetailPage } from '@/components/pages/ProductDetailPage';
import { CartPage } from '@/components/pages/CartPage';
import { CheckoutPage } from '@/components/pages/CheckoutPage';
import { LoginPage } from '@/components/pages/LoginPage';
import { RegisterPage } from '@/components/pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth pages without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Pages with layout */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/products" element={
          <Layout>
            <ProductsPage />
          </Layout>
        } />
        <Route path="/products/:id" element={
          <Layout>
            <ProductDetailPage />
          </Layout>
        } />
        <Route path="/cart" element={
          <Layout>
            <CartPage />
          </Layout>
        } />
        <Route path="/checkout" element={
          <Layout>
            <CheckoutPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;