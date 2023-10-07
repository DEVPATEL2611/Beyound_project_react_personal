
import './App.css';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar'
import Auth from './components/Auth';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import WishListPage from './pages/WishListPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { ContextProvider } from './helpers/LoginContext';
import SingleProductPage from './pages/SingleProductPage';
import Product from './pages/Product';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <AppHeader />
        <NavBar />
        <Product />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
