import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { HomeLayoutPage_86, HomePage_86, BlogStaticPage_86, BlogLocalJsonPage_86 } from './pages';

const router = createBrowserRouter([
  {path: '/',
  element: <HomeLayoutPage_86/>,
  children: [
      {
      index: true,
      element: <HomePage_86/>,
      },
      {
      path: 'static_86',
      element: <BlogStaticPage_86/>,
      },
      {
      path: 'localjson_86',
      element: <BlogLocalJsonPage_86/>,
      },
    ],
  },
]);

const App_86 = () => {
  return <RouterProvider router={router} />;
}

export default App_86