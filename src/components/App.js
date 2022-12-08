import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { fetchCurrentUser } from "../actions";
import Header from "./Header";
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


// const Routes = () => {
//     const routes = useRoutes(routesArray);
//     return (
//         <div>
            
//             {routes}
//         </div>
//     );
// }

// export default Routes;

const App = ({ route }) => {
    // console.log(route);
    return (
        <div>
            <Header />
            <Outlet />
            {/* {route} */}
        </div>
    );
}

export default {
    element: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};

