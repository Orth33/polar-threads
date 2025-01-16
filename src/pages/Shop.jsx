import { useState } from "react";
import { useCart } from "../context/CartContext";
import Input from "../elements/Input";

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
  {
    id: 5,
    name: "Fleece Jacket",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/6248672/pexels-photo-6248672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jackets",
    description: "Stay warm and cozy with our fleece jacket.",
  },
  {
    id: 6,
    name: "Beanie",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/2119500/pexels-photo-2119500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Keep your head warm with our soft beanie.",
  },
  {
    id: 7,
    name: "Waterproof Boots",
    price: 99.99,
    image:
      "https://images.pexels.com/photos/2929284/pexels-photo-2929284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Footwear",
    description: "Stay dry and warm with our waterproof boots.",
  },
  {
    id: 8,
    name: "Insulated Jacket",
    price: 249.99,
    image:
      "https://images.pexels.com/photos/30231442/pexels-photo-30231442/free-photo-of-man-in-winter-jacket-standing-in-snowy-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jackets",
    description: "Experience ultimate warmth with our insulated jacket.",
  },
  {
    id: 9,
    name: "Snow Goggles",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/10329697/pexels-photo-10329697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Protect your eyes from snow glare with our snow goggles.",
  },
  {
    id: 10,
    name: "Winter Socks",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/6968238/pexels-photo-6968238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Keep your feet warm and cozy with our winter socks.",
  },
  {
    id: 11,
    name: "Down Jacket",
    price: 299.99,
    image:
      "https://images.pexels.com/photos/30210509/pexels-photo-30210509/free-photo-of-person-wearing-down-jacket-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jackets",
    description: "Experience ultimate warmth with our down jacket.",
  },
  {
    id: 12,
    name: "Fur-Lined Hat",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/4693311/pexels-photo-4693311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Stay warm and stylish with our fur-lined hat.",
  },
  {
    id: 13,
    name: "Snowboard",
    price: 399.99,
    image:
      "https://images.pexels.com/photos/30210511/pexels-photo-30210511/free-photo-of-person-snowboarding-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Footwear",
    description:
      "Experience the thrill of snowboarding with our high-quality board.",
  },
  {
    id: 14,
    name: "Winter Gloves",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/7481686/pexels-photo-7481686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    description: "Keep your hands warm and dry with our winter gloves.",
  },
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
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md overflow-hidden"
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
                    className="border text-sm px-4 py-2 rounded-sm border-gray-400 font-medium text-gray-600 hover:bg-black hover:text-white transition-colors duration-500 "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No products found.</div>
        )}
      </div>
    </div>
  );
}
