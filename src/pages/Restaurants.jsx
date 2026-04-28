import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

const Restaurants = () => {
  return (
    <div className="px-10 py-16">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">
        Restaurants Near You
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} res={res} />
        ))}
      </div>

    </div>
  );
};

export default Restaurants;