import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard";

const RestaurantDetails = ({ cart, setCart }) => {
  const { id } = useParams();

  const restaurant = restaurants.find((res) => res.id == id);

  return (
    <div className="px-10 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-gray-500 mt-2">{restaurant.cuisine}</p>

      <div className="flex gap-4 mt-3">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
          ⭐ {restaurant.rating}
        </span>
        <span className="text-gray-500">{restaurant.deliveryTime}</span>
      </div>

      {/* Menu */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Menu</h2>

      <div className="grid grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
