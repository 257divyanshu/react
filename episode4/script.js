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
// const RestaurantCard = (props) => {
//     let {name, cuisines, price, location} = props;
//     return (
//         <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[15px]">
//             <div>
//                 <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mango_shake_zdish.png" />
//             </div>
//             <div className="m-[5px]">
//                 <div className="text-[22px] font-bold">{name}</div>
//                 <div className="text-ellipsis overflow-hidden whitespace-nowrap">{cuisines}</div>
//                 <div>Starting from Rs.{price}</div>
//                 <div>{location}</div>
//             </div>
//         </div>
//     )
// }


// STEP 4 and STEP 5
// feching some data from the swiggy api and then using it in our project
// without using map
// using map
const RestaurantCard = (props) => {
    let {cloudinaryImageId,name,cuisines,costForTwo,locality,areaName} = props?.res?.info;
    return (
        <div className="res-card border-[1px] border-solid border-black w-[250px] rounded-[5px] p-[8px] cursor-pointer m-[10px]">
            <div>
                <img className="block w-[234px] h-[234px] object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            </div>
            <div className="m-[5px]">
                <div className="text-[22px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{name}</div>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(", ")}</div>
                <div>{costForTwo}</div>
                <div>{locality}, {areaName}</div>
            </div>
        </div>
    )
}
const restaurants =  [
    {
      "info": {
        "id": "5252",
        "name": "Om Sweets & Snacks",
        "cloudinaryImageId": "bsbkwruizgwqmv7cvoaf",
        "locality": "Jail Road",
        "areaName": "Jail Road",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "South Indian",
          "Chinese",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "676",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 22:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/om-sweets-and-snacks-jail-road-delhi-5252",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "43908",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "C Block",
        "areaName": "Janakpuri",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 06:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-c-block-janakpuri-delhi-43908",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "716561",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
        "locality": "Mayapuri Industrial Area",
        "areaName": "Rajouri Garden",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.7",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-mayapuri-industrial-area-rajouri-garden-delhi-716561",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "514394",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "Gopi Nath Bazar",
        "areaName": "Delhi Cantt.",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "1",
        "avgRatingString": "4.3",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-gopi-nath-bazar-delhi-cantt-delhi-514394",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "20539",
        "name": "Singla's Sweets, Bakery & Restaurant",
        "cloudinaryImageId": "2ba0ecc76a854c73dfd67be6b86ed0aa",
        "locality": "Tilak Nagar",
        "areaName": "Tilak Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Chinese",
          "South Indian",
          "Italian",
          "Bakery"
        ],
        "avgRating": 4.2,
        "parentId": "474810",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/singlas-sweets-bakery-and-restaurant-tilak-nagar-delhi-20539",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "40807",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "Hari Nagar",
        "areaName": "Jail Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 02:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-hari-nagar-jail-road-delhi-40807",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "443501",
        "name": "EatFit",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/bf5211ad-bf62-43ed-a3f2-02985ca38b25_443501.JPG",
        "locality": "Patel Nagar",
        "areaName": "Tilak Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani"
        ],
        "avgRating": 4.2,
        "parentId": "76139",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/eatfit-patel-nagar-tilak-nagar-delhi-443501",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "698604",
        "name": "FNP Cakes By Ferns N Petals",
        "cloudinaryImageId": "ec780807d6fade1fc1ed97dd3acc7e2b",
        "locality": "Block C 4A",
        "areaName": "Janakpuri",
        "costForTwo": "₹499 for two",
        "cuisines": [
          "Bakery"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "339638",
        "avgRatingString": "4.1",
        "totalRatingsString": "9",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 21:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-block-c-4a-janakpuri-delhi-698604",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "219496",
        "name": "Bikanervala",
        "cloudinaryImageId": "hf7ufcmehh6cbtktysl5",
        "locality": "C 2 Block",
        "areaName": "Janakpuri",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "North Indian",
          "South Indian",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "45936",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bikanervala-c-2-block-janakpuri-delhi-219496",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "353789",
        "name": "Ghar ka Khana by EatFit",
        "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
        "locality": "Patel Nagar",
        "areaName": "Uttam Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Healthy Food",
          "Indian",
          "Punjabi",
          "South Indian",
          "Rajasthani",
          "Maharashtrian",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "422576",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-patel-nagar-uttam-nagar-delhi-353789",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "558797",
        "name": "HRX by EatFit",
        "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
        "locality": "2Nd Block",
        "areaName": "Tilak Nagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Pastas"
        ],
        "avgRating": 4.2,
        "parentId": "335529",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-2nd-block-tilak-nagar-delhi-558797",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "354375",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "2Nd Block",
        "areaName": "Tilak Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "319582",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-2nd-block-tilak-nagar-delhi-354375",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "611993",
        "name": "Madno - House of Sundaes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/1898ff25-7a9d-427f-83dd-916dcdee494c_611993.jpg",
        "locality": "RAJOURI GARDEN",
        "areaName": "Janakpuri",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "264082",
        "avgRatingString": "4.1",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/madno-house-of-sundaes-rajouri-garden-janakpuri-delhi-611993",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "580076",
        "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        "cloudinaryImageId": "a5b1713e5dbcac2d67a5bcb41e457ae3",
        "locality": "Rajouri Garden",
        "areaName": "Janakpuri",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "5655",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/test2.png",
              "shortDescription": "Perfect ice cream delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-rajouri-garden-janakpuri-delhi-580076",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "228324",
        "name": "NutrioBox",
        "cloudinaryImageId": "j1rnlryh0hohh9omysip",
        "locality": "B Block",
        "areaName": "Janakpuri",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Continental"
        ],
        "avgRating": 4.3,
        "parentId": "5349",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nutriobox-b-block-janakpuri-delhi-228324",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "661085",
        "name": "HRX Beverages - Juices, Coffee & Kombucha",
        "cloudinaryImageId": "3aed4be19affeb4bba136c953ba7283c",
        "locality": "PATEL NAGAR",
        "areaName": "TILAK NAGAR",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Juices",
          "Healthy Food",
          "Desserts"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "509799",
        "avgRatingString": "4.5",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hrx-beverages-juices-coffee-and-kombucha-patel-nagar-tilak-nagar-delhi-661085",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "54413",
        "name": "Hira Sweets",
        "cloudinaryImageId": "ocrewrzptujvncpiyvmi",
        "locality": "Janakpuri",
        "areaName": "Janakpuri",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Continental",
          "Bakery",
          "Street Food",
          "Sweets",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "5155",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 23:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hira-sweets-janakpuri-delhi-54413",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "254117",
        "name": "McDonald's",
        "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
        "locality": "Ashok Nagar",
        "areaName": "Tilak Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-ashok-nagar-tilak-nagar-delhi-254117",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "767777",
        "name": "Bakingo",
        "cloudinaryImageId": "e28bacacd405a62eb7f61d4b929ff9d6",
        "locality": "RAJOURI GARDEN",
        "areaName": "JANAKPURI",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "3818",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bakingo-rajouri-garden-janakpuri-delhi-767777",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "740291",
        "name": "Costa Coffee",
        "cloudinaryImageId": "ccebd2c681c211f9717398514e925c2d",
        "locality": "Janakpuri Market",
        "areaName": "DWARKA",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Bakery",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "8427",
        "avgRatingString": "4.2",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-19 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/costa-coffee-janakpuri-market-dwarka-delhi-740291",
        "type": "WEBLINK"
      }
    }
  ]


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
            {/* <div className="res-container flex border-2 border-solid border-black flex-wrap">
                <RestaurantCard name="Chinu Shakes" cuisines="Milkshakes, fruit juices, tea, coffee, soups" price="50" location="Goa" />
                <RestaurantCard name="Chinu Meals" cuisines="Thalis, South Indian, North Indian, Punjabi, Marathi, Gujrati, Rajasthani" price="150" location="Dehradun" />
                <RestaurantCard name="Chinu Snacks" cuisines="Samosa, Kachodi, Sandwich, Pasta, Rools, French Fries, Burger, Pizza" price="40" location="Shimla" />
            </div> */}
            {/* STEP 4 using swiggy api data without map*/}
            {/* <div className="res-container flex border-2 border-solid border-black flex-wrap">
                <RestaurantCard res={restaurants[0]} />
                <RestaurantCard res={restaurants[1]} />
                <RestaurantCard res={restaurants[2]} />
                <RestaurantCard res={restaurants[3]} />
                <RestaurantCard res={restaurants[4]} />
                <RestaurantCard res={restaurants[5]} />
                <RestaurantCard res={restaurants[6]} />
                <RestaurantCard res={restaurants[7]} />
                <RestaurantCard res={restaurants[8]} />
            </div> */}
            {/* STEP 5 using swiggy api data with map */}
            <div className="res-container flex border-2 border-solid border-black flex-wrap justify-between p-[10px]">
                {restaurants.map((restaurant)=><RestaurantCard res={restaurant} />)}
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