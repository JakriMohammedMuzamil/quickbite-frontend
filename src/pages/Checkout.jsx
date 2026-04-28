import { useState } from "react";

const Checkout = ({ cart, setCart }) => {

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    alert("Order placed successfully 🎉");

    setCart([]); // clear cart
  };

  return (
    <div className="px-10 py-16 grid grid-cols-2 gap-10">

      {/* LEFT - DELIVERY FORM */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />
      </div>

      {/* RIGHT - ORDER SUMMARY */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-3">
            <p>{item.name} x {item.qty}</p>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}

        <hr className="my-4" />

        <h3 className="text-xl font-bold">
          Total: ₹{total}
        </h3>

        <button
          onClick={handleOrder}
          className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg"
        >
          Place Order
        </button>
      </div>

    </div>
  );
};

export default Checkout;