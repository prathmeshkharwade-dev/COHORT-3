import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Users from '../pages/Users';
import Products from '../pages/Products';
import Home from '../pages/Home';

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />,
                        },
                        {
                            path: "register",
                            element: <Register />,
                        }
                    ],
                }
            ]
        },




        {
            path: "/main",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            path:"",
                            element:<Home />,
                        },
                         {
                            path:"users",
                            element:<Users />,
                        },
                         {
                            path:"products",
                            element:<Products />,
                        },
                    ],
                },
            ],
        },
    ])


    return <RouterProvider router={router} />;
}

export default AppRoutes
