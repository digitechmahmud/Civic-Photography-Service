import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('services.json')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('services.json')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('services.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/Register',
                element:<Register></Register>
            }
        ]
    }
])