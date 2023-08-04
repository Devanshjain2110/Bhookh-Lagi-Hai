import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { QualityContainer } from "./QualityContainer";
import { scroller } from "react-scroll";
import { Footer } from "./Footer";
import { GoSearch } from "react-icons/go";


function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

export default function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);
  const handleScroll = () =>{
    scroller.scrollTo('res-list',{
      smooth:true,
      duration: 560,
      offset : -170
    })
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    async function checkJsonData(jsonData) {
      let max = 0;
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

    // updated state variable restaurants with Swiggy API data
        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined && max <= checkData.length) {
          max = checkData;
        }
      }
      return max;
    }

    const resData = await checkJsonData(json);
    setRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <QualityContainer onClicker={handleScroll}/>
    <div className="bg-white text-black" >
      <div className="ml-24  mr-[118] border-b-2 border-b-slate-300">
        <input
          type="text"
          data-testid = "search-btn"
          className="border border-solid border-gray-400 py-2 pl-3 pr-16 rounded-2xl rounded-r-none bg-white"
          value={searchInput}
          placeholder="Search Restaurants"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        <button
          className="px-3 -ml-1 py-3  rounded-full rounded-l-none my-4 text-white bg-orange-950 border border-l-gray-200"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
          }}
        >
      <GoSearch />
        </button>
        <button
          className="px-4 py-2 mr-2 ml-[78px] bg-white rounded-full hover:bg-orange-500 hover:text-white "
          onClick={() => {
            const filtered = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="px-4 py-2 mx-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a,b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Nearest Restaurants
        </button>
        <button
          className="px-4 py-2 mx-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a,b) => Number(a.info.costForTwo.substr(1,3)) - Number(b.info.costForTwo.substr(1,3))
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost : Low To High
        </button>
        <button
          className="px-4 py-2 mx-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants]
            sortedList.sort(
              (a,b) => Number(b.info.costForTwo.substr(1,3)) - Number(a.info.costForTwo.substr(1,3))
            );
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost : High to Low
        </button>
        
        <button
          className="px-4 py-2 mx-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
          onClick={() => {
            let sortedList = [...restaurants];
            sortedList.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
            setFilteredRestaurants(sortedList);
          }}
        >
          Delivery Time
        </button>
      </div>
      <div id="res-list" className="flex flex-wrap mx-20 pb-3" data-testid="shimmer">
        {filteredRestaurants?.map((restaurant) => {
          return (
    
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <PromotedRestaurantCard {...restaurant.info} />
              ) :  
              (
                <RestaurantCard {...restaurant.info} />
              )
            }
            </Link>
          );
        })}
      </div>
    </div>
  
    </>
  );
}
