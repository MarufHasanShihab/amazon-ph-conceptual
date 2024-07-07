import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import ProfileEdit from "../Pages/ProfileEdit/ProfileEdit";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <DashboardLayout></DashboardLayout>,
                children:[
                  {
                    path: '/dashboard',
                  element: <Dashboard></Dashboard>
                  },
                  {
                    path: '/dashboard/profile',
                  element: <Profile></Profile>
                  },
                  {
                    path: '/dashboard/profileEdit',
                  element: <ProfileEdit></ProfileEdit>
                  }
                ]
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