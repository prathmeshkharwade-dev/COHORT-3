import React, { useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import PublicProtected from './protected/PublicProtected';
import AuthLayout from '../app/layouts/AuthLayout';
import LoginPage from '../features/auth/ui/pages/LoginPage';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MainLayout from '../app/layouts/MainLayout';
import HomePage from '../shared/ui/pages/HomePage';
import ProductsPage from '../features/products/ui/pages/ProductsPage';
import CartPage from '../features/cart/ui/pages/CartPage';
import OrderPage from '../features/orders/ui/pages/OrderPage';
import { hydrateUser } from '../features/auth/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice';
import MainProtected from './protected/MainProtected';

const AppRoutes = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        (async() => {
            try { 
                let response = await hydrateUser();
                console.log(response);
                dispatch(addUser(response));
                
            } catch (error) {
                console.log("error in  hydration api..", error);
                
            }
        })();
    }, []);

    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected />,
            children:[
                {
                    path:"",
                    element: <AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element:<LoginPage/>,
                        },
                        {
                            path:"register",
                            element:<RegisterPage/>,
                        }
                    ]
                }
            ]
        },
        {
            path: "/main",
            element: <MainProtected />,
            children: [
                {
                    path: "",
                    element: <MainLayout/>,
                    children: [
                        {
                            path: "",
                            element: <HomePage/>,                           
                        },
                        {
                            path: "product",
                            element: <ProductsPage/>,                           
                        },
                        {
                            path: "cart",
                            element: <CartPage/>,                           
                        },
                        {
                            path: "orders",
                            element: <OrderPage/>,                           
                        }
                    ]
                }
            ]
        }
    ])
  return  <RouterProvider  router={router}/>;
  
}

export default AppRoutes
