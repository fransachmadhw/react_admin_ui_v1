import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  const Layout = () => {
    return (
      <div className="w-full">
        <Navbar />
        <div>
          <div>
            <Menu />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
