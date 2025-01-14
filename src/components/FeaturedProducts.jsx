import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const featuredProducts = [
  {
    id: 1,
    name: "Winter Parka",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/6712145/pexels-photo-6712145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jackets",
  },
  {
    id: 2,
    name: "Wool Scarf",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/30210502/pexels-photo-30210502/free-photo-of-person-enjoying-snowfall-in-winter-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Snow Boots",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/243917/pexels-photo-243917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Thermal Gloves",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/6667909/pexels-photo-6667909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-md overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="p-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary-600 font-bold">
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-primary-600 text-white px-4 py-2 hover:bg-primary-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
