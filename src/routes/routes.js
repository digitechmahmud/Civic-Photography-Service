import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://civic-photography-server.vercel.app/')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://civic-photography-server.vercel.app/')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://civic-photography-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://civic-photography-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/Register',
                element:<Register></Register>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])