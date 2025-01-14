import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white relative overflow-hidden cursor-pointer"
      onClick={() => (window.location.href = "/shop")}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-white opacity-10 rotate-45"></div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-white opacity-10 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row justify-center">
          <div className="text-center mb-4 sm:mb-0">
            <h2 className="font-tafabricans text-lg sm:text-xl mb-2 text-shadow-md">
              Winter Flash Sale: Up to 50% Off!
            </h2>
          </div>

          <div className="font-tafabricans flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="flex flex-row items-center">
                <div className="px-3 text-lg animate-pulse">
                  {formatNumber(timeLeft.hours)}
                </div>
                <span className="text-xs">HOURS</span>
              </div>

              <div className="flex flex-row items-center">
                <div className="px-3 text-xl animate-pulse">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <span className="text-xs">MINS</span>
              </div>

              <div className="flex flex-row items-center">
                <div className="px-3 text-xl animate-pulse">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <span className="text-xs">SECS</span>
              </div>
            </div>

            {/* <Link
              to="/shop"
              className="bg-white text-primary-800 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-primary-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shop Now
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
