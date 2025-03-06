import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import 'swiper/css';

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import Home from './Home/Home.jsx'; 
import Shop from './shop/Shop.jsx'; 
import Blog from './blog/Blog.jsx'; 
import CartPage from './shop/CartPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from './shop/SingleProduct.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import Contact from './contactPage/Contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart-page",
        element: <CartPage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthProvider>
    <RouterProvider router={router} />
  // </AuthProvider>
);
