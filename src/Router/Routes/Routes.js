import { createBrowserRouter } from "react-router-dom";
import Register from "../../components/Authentication/Register/Register";
import SignIn from "../../components/Authentication/SignIn/SignIn";
import AboutUs from "../../components/Pages/AboutUs/AboutUs";
import AddService from "../../components/Pages/AddService/AddService";
import Blog from "../../components/Pages/Blog/Blog";
import Homepage from "../../components/Pages/Homepage/Homepage";
import MyReviews from "../../components/Pages/MyReviews/MyReviews";
import ServiceDetails from "../../components/Pages/ServiceDetails/ServiceDetails";
import Services from "../../components/Pages/Services/Services";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => fetch(`https://sean-tucker-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
        ]
    }
])