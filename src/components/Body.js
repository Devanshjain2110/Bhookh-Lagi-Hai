import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name?.toLowerCase()?.includes(searchInput.toLowerCase())
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
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="ml-24">
        <input
          type="text"
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
          className="px-4 py-2 bg-gray-100 rounded-full"
          onClick={() => {
            const filtered = restaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap mx-20">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
              {restaurant.data.promoted ? (
                <PromotedRestaurantCard {...restaurant.data} />
              ) : (
                <RestaurantCard {...restaurant.data} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
