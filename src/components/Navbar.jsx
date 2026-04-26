import React from "react";
import Logo from "../assets/Logo.png";
import { HiSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-22 flex justify-between items-center px-8 py-3 text-gray-500">
      {/* Logo nav */}
      <div className="flex-1 h-full ">
        <img
          src={Logo}
          alt=""
          className="h-full w-auto transform transition duration-200 hover:scale-110"
        />
      </div>

      {/*center nav*/}
      <div className=" hidden md:flex items-center gap-4 font-medium  px-3 py-2 ">
        {["Home", "Restaurants", "About Us", "Contact"].map((items) => {
          const path =
            items === "Home" ? "/" : `/${items.toLowerCase().replace(" ", "")}`;

          return (
            <NavLink to={path} key={items}>
              {({ isActive }) => (
                <div
                  className={`relative group cursor-pointer px-2 py-1 transition duration-200 ${
                    isActive
                      ? "text-orange-500 scale-110"
                      : "text-gray-500 hover:text-orange-400 hover:scale-110"
                  }`}
                >
                  {items}

                  {/* dot indicator */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-0 w-1 h-1 rounded-full transition ${
                      isActive
                        ? "bg-orange-500 opacity-100"
                        : "bg-orange-400 opacity-0 group-hover:opacity-80"
                    }`}
                  ></span>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Left Nav login cart */}
      <div className="flex-1 flex justify-end items-center gap-6">
        {/* Desktop icons */}
        <div className="hidden md:flex items-center gap-6">
          <HiSearch
            size={20}
            className="cursor-pointer transform transition duration-200 hover:scale-125"
          />
          <FaShoppingCart
            size={20}
            className="cursor-pointer transform transition duration-200 hover:scale-125"
          />
          <button className="bg-orange-400 rounded text-sm py-1 px-3 text-white font-semibold hover:bg-orange-500 transform transition duration-200 hover:scale-110">
            Log In
          </button>
        </div>

        {/* Mobile icon */}
        <span className="md:hidden text-2xl cursor-pointer transform transition duration-200 hover:scale-125">
          <IoReorderThreeOutline size={30} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
