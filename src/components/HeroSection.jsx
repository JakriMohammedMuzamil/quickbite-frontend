import React from "react";
import Food from "../assets/Food.png";
import { FcAlarmClock } from "react-icons/fc";
import { FaLeaf } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
<GiOpenedFoodCan />;

const HeroSection = () => {
  return (
    <div className="flex flex-row h-[calc(100vh-88px)] ">
      <div className="w-1/2 px-16 py-28 space-y-6">
        <span className="text-orange-500 font-bold text-5xl">Welcome to</span>

        <h1 className="text-5xl font-bold leading-tight">
          QuickBite <br />
          Delivered <span className="text-orange-500">Fast & Fresh</span>
        </h1>
        <p className="text-gray-500 max-w-md">
          Experience the best dishes from top chefs delivered fresh to your
          doorstep.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transform transition duration-200 hover:scale-105">
            Order Now
          </button>

          <button className="border px-6 py-2 rounded-lg transform transition duration-200 hover:scale-105">
            Explore Menu
          </button>
        </div>

        <p className="flex items-center gap-2 text-m text-gray-400">
          <FcAlarmClock />
          Open: 11:00am - 11:00pm
        </p>
      </div>

      {/* right side image */}
      <div className="w-1/2 flex justify-center items-center overflow-hidden">
        {/* Plate Animation */}
        <div className="relative">
          {/* Plate Animation */}
          <div className="plate-anim h-[700px] w-[700px] rounded-full overflow-hidden">
            <img
              src={Food}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-20 left-10 bg-white shadow-lg p-4 rounded-xl w-48 card-anim">
            <p className="font-semibold">Salad Bowl</p>
            <p className="text-gray-500 text-sm">Fresh & Healthy</p>
            <p className="text-orange-500 font-bold">₹199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
