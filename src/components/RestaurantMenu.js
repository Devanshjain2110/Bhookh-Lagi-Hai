import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import {useRestaurantMenu} from "./CustomHook/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const { id } = useParams();
  let { restaurantMenu, menu, category } = useRestaurantMenu(id);


  if (restaurantMenu === null) return <Shimmer />;

  return (
    <div className="text-center flex mx-96 px-10">
      <div className="">
      <h2 className="font-bold my-6 text-2xl">{restaurantMenu.name}</h2>
      <h3 className="font-bold text-lg">
        {"Average Price - "}
        Rs {restaurantMenu.costForTwo / 100} { " for Two"}
      </h3>
      <h3 className="font-bold text-lg">{restaurantMenu.avgRating} ★</h3>
    
      {Object.values(category).map((category) => (
        <RestaurantCategory key={category.card.card.title} data={category.card.card}/>
      ))} 
      </div>
          </div> 
  );
};
