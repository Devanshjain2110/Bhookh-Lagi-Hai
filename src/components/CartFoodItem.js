

export const CartFoodItem = ({
    name,
    imageId,
    description,
    price
}) =>{
 return (
      <div className="m-4 min-h-[380px] p-4 w-[300px] bg-slate-200 rounded-lg hover:bg-rose-400">
        <img
          className="rounded-lg"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
             imageId 
          }
          alt="logoRes"
        />
        <h2 className="font-bold py-2 text-lg text-slate-950 ">{name}</h2>
         <p> {description} </p>
        <h4 className="py-1"> Cost : ₹{price / 100}</h4>  
       </div>
    );
    }

