import React from "react";
import { useRoutes } from "react-router-dom";
import { routesArray } from "./RoutesData";


// export default () => {
//     return (
//         <Routes>
//             <Route path="/" element={<App />} />
//             <Route path="/users" element={<UsersList />} />
//         </Routes>
//     )
// };

// export default [
//     {
//         path: '/',
//         element: <App />,
//         exact: true
//     },
//     {
//         path: '/users',
//         element: <UsersList />,
//     }
// ];


const Routes = () => {
    const routes = useRoutes(routesArray);
    return routes;
}

export default Routes;
