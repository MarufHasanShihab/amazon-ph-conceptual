import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";


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
                element: <Products></Products>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
      }
    ]
  )

export default router;