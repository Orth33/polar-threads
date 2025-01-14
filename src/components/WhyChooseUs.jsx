import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "https://files.catbox.moe/63dy97.png",
      title: "Fast Shipping",
      description: "Get your orders delivered quickly.",
    },
    {
      icon: "https://files.catbox.moe/mn4jvs.png",
      title: "Easy Returns",
      description: "Hassle-free return policy.",
    },
    {
      icon: "https://files.catbox.moe/jlc10x.png",
      title: "Affordable Prices",
      description: "Quality fashion at unbeatable prices.",
    },
    {
      icon: "https://files.catbox.moe/19q0wx.png",
      title: "Exclusive Collections",
      description: "Unique winter outfits you won't find elsewhere.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-50 to-pink-100 py-10 px-6 rounded-lg shadow-lg text-center">
      {/* Heading */}
      <h2 className="font-tafabricans text-3xl font-extrabold text-gray-900 mt-10 mb-12">
        Why Choose Us?
      </h2>
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="w-45 h-40 mx-auto mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-base text-gray-600 mt-2 mb-10">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
