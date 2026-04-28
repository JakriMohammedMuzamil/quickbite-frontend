import { useEffect, useState } from "react";
import AppRoutes from "./routings/AppRoutes";
import LoginModal from "./components/LoginModal";

const App = () => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || null;
  });

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 return (
  <>
    <AppRoutes
      cart={cart}
      setCart={setCart}
      user={user}
      setUser={setUser}
      setShowLogin={setShowLogin}
    />

    {showLogin && (
      <LoginModal setUser={setUser} setShowLogin={setShowLogin} />
    )}
  </>
);
};

export default App;
