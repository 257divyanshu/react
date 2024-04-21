import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockdata";
import {useState} from "react";

// let resList = restaurants;
// console.log(resList);
const Body = () => {
    const [resList,setResList] = useState(restaurants);
    return (
        <div className="body px-[60px]">
            <div>
                <button className="filter-btn" onClick={
                    function(){
                        const newResList  = restaurants.filter(function(res){
                            return res.info.avgRating>4.2;
                        })
                        setResList(newResList);
                        console.log(resList);
                    }
                }>Filter</button>
            </div>
            <div>
                <button className="reset-btn" onClick={
                    function(){
                        setResList(restaurants);
                        console.log(resList);
                    }
                }>Reset</button>
            </div>
            <div className="res-container flex border-2 border-solid border-black flex-wrap justify-between p-[10px]">
                {resList.map((restaurant)=><RestaurantCard res={restaurant} />)}
            </div>
        </div>
    )
};
export default Body;