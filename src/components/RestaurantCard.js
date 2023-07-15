export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="m-4 min-h-[380px] p-4 w-[300px] bg-slate-200 rounded-lg hover:bg-rose-400">
      <img
        className="rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="logoRes"
      />
      <h2 className="font-bold py-3 text-lg ">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4>Cost for two people : ₹{costForTwo / 100}</h4>
      <h4> Delivery TIme : {deliveryTime} minutes</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-4 p-2 rounded-lg"> Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
