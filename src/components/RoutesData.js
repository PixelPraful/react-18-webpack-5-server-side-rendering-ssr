import React from "react";
import App from "../pages/App";
import UsersList from "../pages/UsersList";

export const routesArray = [
    {
        element: <App.element />,
        path: '/',
    },
    {
        element: <UsersList.element />,
        loadData: UsersList.loadData,
        path: '/users',
    }
];
