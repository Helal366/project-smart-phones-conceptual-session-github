import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import Cart from "../pages/Cart";


export const routers=createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                hydrateFallbackElement: <p>Loading...</p>,
                loader: ()=>fetch('/phones.json'),
            },
            {
                path: '/favorites',
                Component: Favorites
            },
            {
                path: '/cart',
                Component: Cart
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/phoneDetails/:jhankar',
                Component: PhoneDetails,
                hydrateFallbackElement: <p>Loading...</p>,
                loader: ()=>fetch('../phones.json')
            },
            // {
            //     path: '*',
            //     Component: ErrorPage
            // }
        ]
    }
    
])