import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BookDetails from './componets/BookDetails/BookDetails';
import Dashboard from './componets/Dashboard/Dashboard';
import ErrorPage from './componets/ErrorPage/ErrorPage';
import Home from './componets/Home/Home';
import Root from './componets/root/root';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // Add your routes here
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: ()=> fetch('./booksData.json'),
      },
      {
        path: "dashboard",
        element: <Dashboard/> ,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
