import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Orders from "../pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../pages/Profile/Profile";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/login',
                Component: LogIn
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
]);