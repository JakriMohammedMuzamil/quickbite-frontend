import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ cart, user, setUser, setShowLogin }) => {
  return (
    <>
      <Navbar
        cart={cart}
        user={user}
        setUser={setUser}
        setShowLogin={setShowLogin}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;