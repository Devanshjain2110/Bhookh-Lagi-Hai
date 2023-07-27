import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-[#fff]" >
      <div className="ml-24">
        <input
          type="text"
          data-testid = "search-btn"
          className="border border-solid border-black"
          value={searchInput}
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        
        <button
          className="px-4 py-2 rounded-full m-4 bg-blue-400"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 mx-2 bg-gray-100 rounded-full"
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
          className="px-4 py-2 mx-2 bg-gray-100 rounded-full"
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
          className="px-4 py-2 mx-2 bg-gray-100 rounded-full"
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
          className="px-4 py-2 mx-2 bg-gray-100 rounded-full"
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
          className="px-4 py-2 mx-2 bg-gray-100 rounded-full"
          onClick={() => {
            let sortedList = [...restaurants];
            sortedList.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
            setFilteredRestaurants(sortedList);
          }}
        >
          Delivery Time
        </button>
      </div>
      <div className="flex flex-wrap mx-20" data-testid="shimmer">
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
  );
}
