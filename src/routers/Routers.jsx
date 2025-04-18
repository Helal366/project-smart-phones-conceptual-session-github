import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";


export const routers=createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                hydrateFallbackElement: <p>Loading...</p>,
                loader: ()=>fetch('phones.json'),
            },
            {
                path: '/favorites',
                Component: Favorites
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/phoneDetails',
                Component: PhoneDetails
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
    
])