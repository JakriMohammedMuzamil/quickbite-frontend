import { PiStarFill } from "react-icons/pi";


const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
      
      <div className="relative">
        <img src={dish.image} alt="" className="w-full h-44 object-cover" />

        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-sm font-semibold shadow flex items-center gap-2 ">
          <PiStarFill color="gold" /> {dish.rating}
        </div>
      </div>

    
      <div className="p-4">
       
        <h3 className="font-semibold text-lg">{dish.name}</h3>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{dish.desc}</p>

        
        <div className="flex justify-between items-center mt-3">
        
          <p className="text-orange-500 font-bold text-lg">₹{dish.price}</p>

          <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
