import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]); 