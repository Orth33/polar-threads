import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-tafabricans text-3xl text-black">
              Polar Threads
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className="font-tafabricans text-black hover:scale-105 transition-transform"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-tafabricans text-black hover:scale-105 transition-transform"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-tafabricans text-black hover:scale-105 transition-transform"
            >
              About
            </Link>
            {/* <Link
              to="/contact"
              className="font-tafabricans text-black hover:scale-105 transition-transform""
            >
              Contact
            </Link> */}
            <Link to="/login" className="relative">
              <UserIcon className="h-5 w-5 text-gray-700 hover:text-primary-600" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingBagIcon className="h-5 w-5 text-gray-700 hover:text-primary-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={toggleMenu}
            >
              Cart ({cartItems.length})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
