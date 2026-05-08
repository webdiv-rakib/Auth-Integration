import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
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
            }
        ]
    },
]);