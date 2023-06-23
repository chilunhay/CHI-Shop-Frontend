// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product/:id',
      element: <Product />,
    },
    {
      path: '/products/:category',
      element: <ProductList />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/success',
      element: <Success />,
    },
    {
      path: '/login',
      element: user ? <Navigate replace to="/" /> : <Login />,
    },
    {
      path: '/register',
      element: user ? <Navigate replace to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
