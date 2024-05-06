import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import ErrorPage from '../pages/404/ErrorPage';
import AboutPage from '../pages/About/AboutPage';
import HousingPage from '../pages/Housing/HousingPage';
import Root from './Root';
import Nav from './Nav';
import Footer from './Footer';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <><Nav /><ErrorPage /><Footer /></>,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'housing',
        children: [
          {
            path: ':id',
            element: <HousingPage />
          }
        ]
      },
    ]
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;
