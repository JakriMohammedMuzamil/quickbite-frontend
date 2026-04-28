import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ res }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${res.id}`)}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
    >
      <img src={res.image} className="w-full h-44 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{res.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{res.cuisine}</p>

        <div className="flex justify-between mt-3 text-sm">
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
            ⭐ {res.rating}
          </span>
          <span className="text-gray-500">{res.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;