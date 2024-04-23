import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { SAMPLE } from "./utils/constants";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/ErrorComp";
import Restaurant from "./components/Restaurant";

console.log(SAMPLE);

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resid",
                element: <Restaurant/>,
            },
        ],
        errorElement: <ErrorComp/>,
    },
]);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<AppLayout/>);
rootElement.render(<RouterProvider router={AppRouter}/>);