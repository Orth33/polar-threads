import { useCart } from "../context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <h1 className="font-tafabricans text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1> */}
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-block text-black px-6 py-3 border rounded-md border-gray-400 hover:bg-black hover:text-white transition-colors duration-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <h1 className="font-tafabricans text-center text-3xl font-bold text-gray-900 mb-8">
        Shopping Cart
      </h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 border-b border-gray-200 py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                {item.selectedSize && (
                  <p className="text-gray-600">Size: {item.selectedSize}</p>
                )}
                {item.selectedColor && (
                  <p className="text-gray-600">Color: {item.selectedColor}</p>
                )}
                <div className="flex items-center space-x-4 mt-2">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="rounded-md border-gray-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <button className="w-full mt-10 mb-4 px-6 py-2 border rounded-sm border-gray-400 text-gray-600 text-base font-medium hover:bg-black transition-colors duration-500 hover:text-white active:scale-95">
              Proceed to Checkout
            </button>
            {/* <button className="w-full mt-5 px-6 py-2 border rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50">
              Shop More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
