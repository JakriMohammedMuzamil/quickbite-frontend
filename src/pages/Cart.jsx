import { useNavigate } from "react-router-dom";


const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item,
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0); // remove if qty 0

    setCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  
  const navigate = useNavigate();

  return (
    <div className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-6 border-b pb-4"
            >
              {/* Info */}
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>

              {/* Price */}
              <p className="font-bold">₹{item.price * item.qty}</p>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-8">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
          </div>
         <div className="flex  justify-end">
             <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-orange-500 text-white px-6 py-2 rounded"
          >
            Proceed to Checkout
          </button>
         </div>
        </>
      )}
    </div>
  );
};

export default Cart;
