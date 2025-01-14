import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ShippingPolicy from "./pages/Policies/ShippingPolicy";
import ReturnsExchange from "./pages/Policies/ReturnsExchange";
import FAQ from "./pages/Policies/FAQ";
import SizeGuide from "./pages/Policies/SizeGuide";
import { CartProvider } from "./context/CartContext";
import FlashSaleBanner from "./components/FlashSaleBanner";
import "./App.css";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <FlashSaleBanner />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/returns-exchange" element={<ReturnsExchange />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/size-guide" element={<SizeGuide />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </CartProvider>
    </Router>
  );
}
