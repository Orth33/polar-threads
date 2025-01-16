import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Winter Collection 2025",
    description:
      "Discover our latest winter collection featuring premium quality jackets and coats.",
    cta: "Shop Now",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cozy Accessories",
    description:
      "Complete your winter look with our selection of scarves, gloves, and beanies.",
    cta: "View Accessories",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1611&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Special Offers",
    description: "Get up to 30% off on selected winter wear this season.",
    cta: "Shop Deals",
  },
];

export default function Carousel() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2
                  className="text-4xl md:text-6xl font-bold mb-4"
                  ref={(el) =>
                    gsap.to(el, {
                      duration: 1.1,
                      text: slide.title,
                      ease: "none",
                    })
                  }
                ></h2>
                <p
                  className="text-lg md:text-xl mb-8"
                  ref={(p) =>
                    gsap.to(p, {
                      duration: 1.1,
                      text: slide.description,
                      ease: "none",
                    })
                  }
                ></p>
                <motion.div
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "tween", duration: 0.4 }}
                >
                  <button className="bg-white text-gray-900 px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {slide.cta}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/65"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
