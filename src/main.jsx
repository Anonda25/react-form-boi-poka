import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BooksDetail from './Components/BooksDetail/BooksDetail';
import BookList from './Components/BookList/BookList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BooksDetail></BooksDetail>,
        loader:()=>fetch('/booksData.json'),
      },
      {
        path: '/BookList',
        element:<BookList></BookList>,
        loader:()=>fetch('/booksData.json')

      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
