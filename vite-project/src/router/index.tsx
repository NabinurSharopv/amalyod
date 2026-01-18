import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/home';
import Blog from '../Pages/home/blog';

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