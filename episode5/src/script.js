import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { SAMPLE } from "./utils/constants";

console.log(SAMPLE);

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<AppLayout/>);