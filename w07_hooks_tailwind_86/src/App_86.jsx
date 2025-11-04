import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayoutPage_86,
  HomePage_86,
  BlogStaticPage_86,
  BlogLocalJsonPage_86,
  BlogLocalJsonPage2_86,
  BlogNodePage_86,
  BookListPage_86,
  BlogSupaPage_86,
} from './pages';

import {
  T11_ErrorExamplePage_86,
  T12_UseStateBasicsPage_86,
} from './pages/tutorials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_86 />,
    children: [
      {
        index: true,
        element: <HomePage_86 />,
      },
      {
        path: 'static_86',
        element: <BlogStaticPage_86 />,
      },
      {
        path: 'localjson_86',
        element: <BlogLocalJsonPage_86 />,
      },
      {
        path: 'localjson2_86',
        element: <BlogLocalJsonPage2_86 />,
      },
      {
        path: 'Node_86',
        element: <BlogNodePage_86 />,
      },
      {
        path: 'supa_86',
        element: <BlogSupaPage_86 />,
      },
      {
        path: 'bookList_86',
        element: <BookListPage_86 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_86 />,
    children: [
      {
        index: true,
        element: <HomePage_86 />,
      },
      {
        path: 't11_86',
        element: <T11_ErrorExamplePage_86 />,
      },
      {
        path: 't12_86',
        element: <T12_UseStateBasicsPage_86 />,
      },
    ],
  },
]);

const App_86 = () => {
  return <RouterProvider router={router} />;
};

export default App_86;
