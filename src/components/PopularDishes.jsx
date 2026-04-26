import DishCard from "./DishCard";
import React from "react";
import {dishes} from "../data/dishes";

const PopularDishes = () => {
  return (
    <div className="px-16 py-2 pb-6">
      <h2 className="text-orange-400 font-bold text-6xl leading-relaxed">Popular Dishes</h2>

      <div className="grid grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
