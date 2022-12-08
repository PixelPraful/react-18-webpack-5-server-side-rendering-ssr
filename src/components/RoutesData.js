import React from "react";
import AdminsList from "../pages/AdminsList";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import UsersList from "../pages/UsersList";
import App from "./App";

// export const routesArray = [
//     {
//         element: <Home.element />,
//         path: '/',
//     },
//     {
//         element: <UsersList.element />,
//         loadData: UsersList.loadData,
//         path: '/users',
//     },
//     { path: '*', element: <NotFoundPage.element to="/" replace /> },
// ];

export const routesArray = [
    {
        element: <App.element />,
        path: '/',
        loadData: App.loadData,
        children: [
            {
                element: <Home.element />,
                path: '/',
            },
            {
                element: <UsersList.element />,
                loadData: UsersList.loadData,
                path: '/users',
            },
            {
                element: <AdminsList.element />,
                loadData: AdminsList.loadData,
                path: '/admins',
            },
            { path: '*', element: <NotFoundPage.element to="/" replace /> },
        ]
    }
];
