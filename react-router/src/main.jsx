import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

import { getProducts } from './api/GetProductData'
import { HomePage } from './components/layout/Home'
import { ProductPage } from './components/layout/ProductPage'
import { ContactPage, getFormData } from './components/layout/Contact'
import { ProductDetails } from './components/Ui/ProductDetails'
import { CartPage } from './components/layout/Cart'
import { SuccessPage } from './components/SuccessPage'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    errorElement: <ErrorPage />

    , children: [
      
      { path: "/", element: <HomePage/> },
      { path: "/cart", element: <CartPage/> },
      {
        path: "/products",  element: <ProductPage/>,
        loader: getProducts,
       
      },
      {
        path: "/products/:productId",  element:<ProductDetails/>,
        loader: getProducts,
        
       
      },
      
      {path: "/products/:productId/success",  element:<SuccessPage/>,
  
      
     
    },
      { path: "/contact", element: <ContactPage/> ,action:getFormData},
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>

  // </React.StrictMode>,
)
