import React from "react";
import ReactDOM from "react-dom/client"

// STARTING A FOOD ORDERING APP

// STEP 1 
// hardcoded data
// const RestaurantCard1 = () => {
//     return (
//         <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
//             <div>
//                 <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
//             </div>
//             <div className="m-[5px]">
//                 <div className="text-[22px] font-bold">Chinu Shakes</div>
//                 <div className="text-ellipsis overflow-hidden whitespace-nowrap">MilkShakes, Fruit Juices, Tea, Coffee, Soups</div>
//                 <div>Starting from Rs.50</div>
//                 <div>Goa</div>
//             </div>
//         </div>
//     )
// }
// const RestaurantCard2 = () => {
//     return (
//         <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
//             <div>
//                 <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
//             </div>
//             <div className="m-[5px]">
//                 <div className="text-[22px] font-bold">Chinu Shakes</div>
//                 <div className="text-ellipsis overflow-hidden whitespace-nowrap">MilkShakes, Fruit Juices, Tea, Coffee, Soups</div>
//                 <div>Starting from Rs.50</div>
//                 <div>Goa</div>
//             </div>
//         </div>
//     )
// }
// const RestaurantCard3 = () => {
//     return (
//         <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
//             <div>
//                 <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
//             </div>
//             <div className="m-[5px]">
//                 <div className="text-[22px] font-bold">Chinu Shakes</div>
//                 <div className="text-ellipsis overflow-hidden whitespace-nowrap">MilkShakes, Fruit Juices, Tea, Coffee, Soups</div>
//                 <div>Starting from Rs.50</div>
//                 <div>Goa</div>
//             </div>
//         </div>
//     )
// }

// STEP 2 
// using props
// without destructuring
// const RestaurantCard = (props) => {
//     return (
//         <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
//             <div>
//                 <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
//             </div>
//             <div className="m-[5px]">
//                 <div className="text-[22px] font-bold">{props.name}</div>
//                 <div className="text-ellipsis overflow-hidden whitespace-nowrap">{props.cuisines}</div>
//                 <div>Starting from Rs.{props.price}</div>
//                 <div>{props.location}</div>
//             </div>
//         </div>
//     )
// }

// STEP 3
// using props
// with destrcturing
const RestaurantCard = (props) => {
    let {name, cuisines, price, location} = props;
    return (
        <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
            <div>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
            </div>
            <div className="m-[5px]">
                <div className="text-[22px] font-bold">{name}</div>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">{cuisines}</div>
                <div>Starting from Rs.{price}</div>
                <div>{location}</div>
            </div>
        </div>
    )
}

// STEP 4


const Body = () => {
    return (
        <div className="body px-[60px]">
            {/* <div className="search">
                Search    
            </div> */}
            {/* STEP 1 hardcoded data */}
            {/* <div className="res-container flex border-2 border-solid border-black flex-wrap">
                <RestaurantCard1/>
                <RestaurantCard2/>
                <RestaurantCard3/>
                <RestaurantCard3/>
                <RestaurantCard3/>
            </div> */}
            {/* STEP 2 and STEP 3 using props (with and without destructuring) */}
            <div className="res-container flex border-2 border-solid border-black flex-wrap">
                <RestaurantCard name="Chinu Shakes" cuisines="Milkshakes, fruit juices, tea, coffee, soups" price="50" location="Goa" />
                <RestaurantCard name="Chinu Meals" cuisines="Thalis, South Indian, North Indian, Punjabi, Marathi, Gujrati, Rajasthani" price="150" location="Dehradun" />
                <RestaurantCard name="Chinu Snacks" cuisines="Samosa, Kachodi, Sandwich, Pasta, Rools, French Fries, Burger, Pizza" price="40" location="Shimla" />
            </div>
        </div>
    )
}

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