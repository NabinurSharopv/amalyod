import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Profile from '../Pages/profile';
import Shop from '../Pages/shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
    {
    path: '/profile',
    element: <Profile />,
  },
   {
    path: '/shop',
    element: <Shop />,
  },
]); 