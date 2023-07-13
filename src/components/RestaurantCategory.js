
import { MenuItem } from "./MenuItem";

export const RestaurantCategory = ({ data }) => {
  const handleClick = (e) =>{
    e.currentTarget.classList.toggle('collapse-close');
  }
  console.log(data);
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 max-w-2xl collapse-close" onClick={handleClick}>
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          {data.title} ({data.itemCards.length})
        </div>
        <div className="collapse-content">
          <MenuItem items={data.itemCards}/>
        </div>
      </div>
    </>
  );
};
