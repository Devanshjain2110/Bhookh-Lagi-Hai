export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwo,
  deliveryTime,
  sla
}, ) => {
  return (
    <div className="m-4 min-h-[400px] p-4 w-[300px] bg-[#313335] rounded-lg hover:bg-[#84807B] hover:shadow-2xl hover:shadow-slate-600">
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
      <h4>{sla.lastMileTravelString} </h4>
      <h4>Cost : {costForTwo} </h4>
      <h4> Delivery TIme : {sla.deliveryTime} minutes</h4>
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
