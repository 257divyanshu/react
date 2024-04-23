import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockdata";
import {useState, useEffect} from "react";
let originalArray = [];
// let resList = restaurants;
// console.log(resList);
const Body = () => {
    console.log("body re-rendered");
    // const [resList,setResList] = useState(restaurants);
    const [resList,setResList] = useState([]);
    if(originalArray.length==0)
    {
        originalArray = resList;
    };
    const [searchText,setSearchText] = useState("");
    useEffect( () => {
        fecthData();
    }, []);
    let fecthData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0796545&lng=82.1409152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        console.log(json); 
        console.log(json.data); 
        console.log(json.data.cards);
        let newArray = json.data.cards.filter((obj)=>obj.card.card["@type"]=="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget");
        console.log(newArray);
        newArray = newArray.filter((obj)=>obj.card.card.header);
        console.log(newArray);
        newArray = newArray.filter((obj)=>obj.card.card.header.title=="Top restaurant chains in Bilaspur");
        console.log(newArray);
        console.log(newArray[0]);
        console.log(newArray[0].card);
        console.log(newArray[0].card.card);
        console.log(newArray[0].card.card.gridElements);
        console.log(newArray[0].card.card.gridElements.infoWithStyle);
        console.log(newArray[0].card.card.gridElements.infoWithStyle.restaurants);
        setTimeout(() => {
            setResList(newArray[0].card.card.gridElements.infoWithStyle.restaurants)
            console.log(resList);
        }, 3000); 
    };
    // if(resList.length==0)
    // {
    //     return <h1>Loading Foood</h1>
    // }
    return resList.length==0? <h1>Loading Food</h1> : (
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
                        setResList(originalArray);
                    }
                }>Reset</button>
            </div>
            <div className="seachBar">
                <input type="text" className="searchText border-[1px] border-solid border-black my-[7px] mr-[7px]" value={searchText} onChange={
                    function(e){
                        setSearchText(e.target.value)
                    }
                }></input><button className="searchBtn" onClick={
                    function(){
                        // console.log(searchText);
                        let newArray = originalArray;
                        newArray = newArray.filter((obj)=>obj.info.name.toString().toLowerCase().includes(searchText.toLowerCase())==true);
                        setResList(newArray);
                        // console.log(resList);
                        // console.log(resList);
                    }
                }>Search</button>
            </div>
            <div className="res-container flex border-2 border-solid border-black flex-wrap justify-between p-[10px]">
                {resList.map((restaurant)=><RestaurantCard res={restaurant} />)}
            </div>
        </div>
    )
};
export default Body;