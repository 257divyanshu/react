import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { SAMPLE } from "./utils/constants";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

console.log(SAMPLE);

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
]);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<AppLayout/>);
rootElement.render(<RouterProvider router={AppRouter}/>);