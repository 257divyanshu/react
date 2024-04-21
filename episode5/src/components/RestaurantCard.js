import { IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    let {cloudinaryImageId,name,cuisines,costForTwo,locality,areaName} = props?.res?.info;
    return (
        <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[10px]">
            <div>
                <img className="block w-[234px] h-[234px] object-cover" src={`${IMAGE_URL}${cloudinaryImageId}`} />
            </div>
            <div className="m-[5px]">
                <div className="text-[22px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{name}</div>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(", ")}</div>
                <div>{costForTwo}</div>
                <div>{locality}, {areaName}</div>
            </div>
        </div>
    )
};
export default RestaurantCard;