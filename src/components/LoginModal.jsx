import { useState } from "react";

const LoginModal = ({ setUser, setShowLogin }) => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) return;

    localStorage.setItem("user", name);
    setUser(name);
    setShowLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl w-80 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginModal;