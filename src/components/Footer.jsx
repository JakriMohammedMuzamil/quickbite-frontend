import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-10 py-10 mt-10">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">QuickBite</h2>
          <p className="text-gray-400 mt-2">
            Fast & fresh food delivered to your doorstep.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className="hover:text-orange-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurants" className="hover:text-orange-400">
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className="hover:text-orange-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-orange-400">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <IoCall size={20} className="text-lg relative top-[1px]" />
            <span>Contact</span>
          </h3>

          <p className="flex items-center gap-2 text-gray-400">
            <IoLocationSharp size={20} className="text-lg relative top-[1px]" />
            <span>India</span>
          </p>

          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <IoIosMail size={20} className="text-lg relative top-[1px]" />
            <span>support@quickbite.com</span>
          </p>
        </div>
      </div>

      <div className="text-center flex items-center gap-1 text-gray-500 mt-8 border-t border-gray-700 pt-4 ">
        <MdOutlineCopyright /> 2026 QuickBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
