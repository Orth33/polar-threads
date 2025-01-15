import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Slider } from "@mui/material";

const categories = ["All", "Jackets", "Accessories", "Footwear"];

const products = [
  {
    id: 1,
    name: "Winter Parka",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/6712145/pexels-photo-6712145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jackets",
    description: "Stay warm in style with our premium winter parka.",
  },
  {
    id: 2,
    name: "Wool Scarf",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/30210502/pexels-photo-30210502/free-photo-of-person-enjoying-snowfall-in-winter-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Soft and cozy wool scarf perfect for winter days.",
  },
  {
    id: 3,
    name: "Snow Boots",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/243917/pexels-photo-243917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Footwear",
    description: "Soft and cozy wool scarf perfect for winter days.",
  },
  {
    id: 4,
    name: "Thermal Gloves",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/6667909/pexels-photo-6667909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Soft and cozy wool scarf perfect for winter days.",
  },

  // Add more products here
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <h1 className="font-tafabricans text-3xl font-bold text-gray-900 mb-8">
        Shop
      </h1> */}
      <div className="flex flex-row justify-between">
        {/* Categories */}
        <div className="flex space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"
          />
        </div>
        {/* Price Range Slider
        <div className="mb-8">
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={200}
            className="w-full"
          />
        </div> */}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="border px-4 py-2 rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50"
                >
                  <h2 className="text-sm text-center text-gray-700">
                    Add to Cart
                  </h2>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
