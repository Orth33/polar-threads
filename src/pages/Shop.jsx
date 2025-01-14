import { useState } from 'react';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Jackets', 'Accessories', 'Footwear'];

const products = [
  {
    id: 1,
    name: 'Winter Parka',
    price: 199.99,
    image: '/images/parka.jpg',
    category: 'Jackets',
    description: 'Stay warm in style with our premium winter parka.',
  },
  {
    id: 2,
    name: 'Wool Scarf',
    price: 39.99,
    image: '/images/scarf.jpg',
    category: 'Accessories',
    description: 'Soft and cozy wool scarf perfect for winter days.',
  },
  // Add more products here
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Shop</h1>
      
      {/* Categories */}
      <div className="flex space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary-600 font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}