const Header = () => {
    return (
        <div className="header border-2 border-solid border-white flex justify-between items-center px-[60px] mb-[10px]">
            <div className="logo-container">
                {/* <img className="logo border-2 border-solid border-white w-[120px]" src="https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg" /> */}
                LOGO
            </div>
            <div className="nav-items">
                <ul className="flex border-2 border-solid border-white p-[10px] w-[500px] justify-between">
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">Home</li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">About Us</li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">Contact Us</li>
                    <li className="border-2 border-solid border-white mx-[5px] px-[5px] text-[20px]">Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;