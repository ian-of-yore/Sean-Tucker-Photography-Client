import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../components/Pages/Homepage/Homepage";
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
                element: <Services></Services>
            }
        ]
    }
])