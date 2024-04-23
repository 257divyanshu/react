import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider , Outlet , Link } from "react-router-dom";
import Route1 from "./route1";
import Route2 from "./route2";
import Route3 from "./route3";
import ErrorComp from "./ErrorComp";
const MainComp = () => {
    return (
        <div>
            <h1>Hi there</h1>
            <div>

                {/* USING LINK TAG PREVENTS FULL PAGE REFRESH */}
                <div> <Link to="./route1"> Route1 </Link></div>
                <div> <Link to="./route2"> Route2 </Link></div>
                <div> <Link to="./route3"> Route3 </Link></div>

                {/* USING ANCHOR TAGS CAUSES FULL PAGE REFERESH */}
                {/* <div> <a className="text-white" href="./route1">Route1</a> </div>
                <div> <a href="./route2">Route2</a> </div>
                <div> <a href="./route3">Route3</a> </div> */}
            </div>
            <Outlet/>
        </div>
    );
};
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainComp />,
        children: [
            {
                path: "/route1",
                element: <Route1 />,
            },
            {
                path: "/route2",
                element: <Route2 />,
            },
            {
                path: "/route3",
                element: <Route3 />,
            },
        ],
        errorElement: <ErrorComp />,
    },
])
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<MainComp/>);
rootElement.render(<RouterProvider router={MainRouter} />);