import { createBrowserRouter } from "react-router-dom";
import Register from "../../components/Authentication/Register/Register";
import SignIn from "../../components/Authentication/SignIn/SignIn";
import Homepage from "../../components/Pages/Homepage/Homepage";
import ServiceDetails from "../../components/Pages/ServiceDetails/ServiceDetails";
import Services from "../../components/Pages/Services/Services";
import Main from "../../layout/Main";



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
                element: <Services></Services>,
                loader: async () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])