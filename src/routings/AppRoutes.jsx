import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import RestaurantDetail from "../pages/RestaurantDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = ({ cart, setCart, user, setUser, setShowLogin }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            cart={cart}
            user={user}
            setUser={setUser}
            setShowLogin={setShowLogin}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />

        <Route
          path="restaurant/:id"
          element={<RestaurantDetail cart={cart} setCart={setCart} />}
        />

        <Route path="aboutus" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route
          path="checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
