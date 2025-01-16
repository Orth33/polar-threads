import { Link } from "react-router-dom";

export default function InstallmentBanner() {
  return (
    <div className="bg-[#F9F8F4] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4 py-4 sm:gap-8">
          <h2 className="font-tafabricans text-3xl font-bold text-gray-900 mt-10">
            Shop Now, Pay Later
          </h2>
          <p className="text-gray-600 mb-8">
            Split your purchase into 4 interest-free payments with our flexible
            payment options
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 px-4 sm:px-4">
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1600px-Klarna_Payment_Badge.svg.png?20200611133815"
              alt="Klarna"
              className="h-8 mb-2"
              onError={(e) =>
                (e.target.src = "https://placehold.co/80x32?text=Klarna")
              }
            />
            <span className="text-sm text-gray-600">Pay in 4</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.HllRpj26JkLfpceR1Z1BsQHaGj?rs=1&pid=ImgDetMain"
              alt="Afterpay"
              className="h-8 mb-2"
              onError={(e) =>
                (e.target.src = "https://placehold.co/80x32?text=Afterpay")
              }
            />
            <span className="text-sm text-gray-600">
              4 interest-free payments
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.5GtPHQgZowlZSGmcPwFrtgHaDO?rs=1&pid=ImgDetMain"
              alt="Affirm"
              className="h-8 mb-2"
              onError={(e) =>
                (e.target.src = "https://placehold.co/80x32?text=Affirm")
              }
            />
            <span className="text-sm text-gray-600">3-36 month terms</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://files.catbox.moe/qo46q8.png"
              alt="Zip"
              className="h-8 mb-2"
              onError={(e) =>
                (e.target.src = "https://placehold.co/80x32?text=Zip")
              }
            />
            <span className="text-sm text-gray-600">Buy now, pay later</span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-primary-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-gray-600">No credit check</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-primary-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-gray-600">Instant approval</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-primary-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600">Zero interest</span>
            </div>
          </div>
        </div>

        <Link
          to="/payment-options"
          className="inline-block mt-10 mb-4 px-6 py-2 border rounded-sm border-gray-400 text-gray-600 text-base font-medium hover:bg-black transition-colors duration-500 hover:text-white active:scale-95"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
