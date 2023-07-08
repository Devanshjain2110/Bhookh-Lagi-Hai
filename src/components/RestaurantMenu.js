import { useParams } from "react-router-dom";
import { IMG_URL } from "../items/Constant";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "./CustomHook/useRestaurantMenu";

export const RestaurantMenu = () => {
  const { id } = useParams();
  let { restaurantMenu, menu } = useRestaurantMenu(id);

  if (restaurantMenu === null) return <Shimmer />;

  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      <h2>{restaurantMenu.name}</h2>
      <img src={IMG_URL + restaurantMenu.cloudinaryImageId} alt="" />
      <h3>{restaurantMenu.areaName}</h3>
      <h3>{restaurantMenu.costForTwo}</h3>
      <h3>{restaurantMenu.avgRating}</h3>
      <h3>{restaurantMenu.slugs?.city}</h3>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menu).map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
