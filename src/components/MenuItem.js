import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";


export const MenuItem = ({ items }) => {

  const dispatch = useDispatch()
  const handleAddItem = (item) =>{
    dispatch(addItem(item ))
    console.log(item)
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
            
          <div className="w-9/12">
            <span>{item.card.info.name}</span>
            <span>
              {item.card.info.name}   - ₹ 
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs my-2">{item.card.info.description}</p>
          </div>
          
          <div  className="w-3/12">
            <div className="absolute">
                <button className="p-2 bg-stone-700 text-white" onClick={() => handleAddItem(item.card.info)}>
                    Add+
                </button>
            </div>
              <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId} alt="" />
              </div>
        </div>
      ))}
    </div>
  );
};
