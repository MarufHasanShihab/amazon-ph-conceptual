import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";


const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: ()=> fetch('https://dummyjson.com/products')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
              path: '/products/:id',
              element: <ProductDetails></ProductDetails>,
              loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
            }
        ]
      }
    ]
  )

export default router;