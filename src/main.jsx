import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Components/Layout/Layout';
import AboutUs from './Components/About/About';
import Home from './Components/Home/Home';
import LoginPage from './Components/Login/Login';
import BooksPage from './Components/Pages/Books';
import NoticeGroup from './Components/Pages/Notice';
import CafeteriaPage from './Components/Pages/Cafeteria';
import IELTSPage from './Components/Pages/Ielts';
import PolicyPage from './Components/Pages/Policy';
import SummerCampPage from './Components/Pages/Summer';
import TransportPage from './Components/Pages/Transport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <AboutUs />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "ielts",
        element: <IELTSPage></IELTSPage>
      },
      {
        path: "notice",
        element: <NoticeGroup></NoticeGroup>
      },
      {
        path: "book",
        element: <BooksPage></BooksPage>
      },
      {
        path: "cafeteria",
        element: <CafeteriaPage></CafeteriaPage>
      },
      {
        path: "policy",
        element: <PolicyPage></PolicyPage>
      },
      {
        path: "summer-camp",
        element: <SummerCampPage/>
      },

      {
        path: "transport",
        element: <TransportPage></TransportPage>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)