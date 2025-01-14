import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to subscribe the user
    console.log("Newsletter signup:", formData);
    toast.success(
      "Thanks for subscribing! Check your email for your 15% off code."
    );
    setFormData({ firstName: "", email: "" });
  };

  return (
    <div className="bg-[#F9F8F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-tafabricans text-3xl font-bold text-gray-900 mb-4">
          Sign Up & Get 15% Off Your First Winter Purchase!
        </h2>
        <p className="text-gray-600 mb-8">
          Be the first to know about seasonal sales and new arrivals!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-10 px-6 py-2 border rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50"
          >
            Join Now
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
