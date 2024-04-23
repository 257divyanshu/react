import { useState } from "react"
import {createBrowserRouter , RouterProvider , Outlet, Link} from "react-router-dom";

const Header = () => {
    const [loginVal,setLogInVal] = useState("logout");
    return (
        <div className="header border-2 border-solid border-white flex justify-between items-center px-[60px] mb-[10px]">
            <div className="logo-container">
                {/* <img className="logo border-2 border-solid border-white w-[120px]" src="https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg" /> */}
                LOGO
            </div>
            <div className="nav-items">
                <ul className="flex border-2 border-solid border-white p-[10px] w-[500px] justify-between">
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><Link to="/">Home</Link></li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><Link to="/about">About</Link></li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><Link to="/contact">Contact</Link></li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">Cart</li>
                    {/* <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><a href="/">Home</a></li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><a href="/about">About</a></li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]"><a href="/contact">Contact</a></li> */}
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">Cart</li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]" onClick={
                        function(){
                            if(loginVal=="login")
                            {
                                setLogInVal('logout');
                            }
                            else
                            {
                                setLogInVal('login');
                            }
                        }
                    } >{loginVal}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;