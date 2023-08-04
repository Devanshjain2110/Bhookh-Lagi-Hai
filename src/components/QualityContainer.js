import QualityCont from "../items/y.jpg";
export const QualityContainer = ({onClicker}) => {

  
  return (
    <div className="text-orange-500 bg-white h-[664] flex justify-between items-center px-16">
      <div className="max-w-xl">
       <h1 className= "text-5xl m-2 font-bold"> Khane ko kuch Chahiye? </h1>
       <h2 className=" text-4xl mx-2 my-5 font-bold"> Phocha dege! </h2>
       <p className="mx-2 text-xl">Indulge in an extraordinary food ordering experience like never before. Join us on this gastronomic adventure, where exceptional flavors, sustainability, and community come together in perfect harmony. Let's celebrate the love of food and culinary exploration, one delicious order at a time.</p>
       <button className="mt-5 mx-2 p-3 rounded-xl text-white bg-orange-500 hover:bg-orange-600 " onClick={onClicker}>
            Get Started
        </button>
        </div>  
       
      <div className="h-96">
        <img src={QualityCont} alt="" className="h-[400]" />
      </div>
    </div>
  );
};
