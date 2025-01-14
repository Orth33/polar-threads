import React from "react";

const KidsSection = () => {
  return (
    <div className="bg-pink-100 flex-col items-center rounded-lg shadow-md mt-10">
      {/* Banner Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:flex-1">
          <h2 className="font-tafabricans text-3xl font-bold text-gray-900">
            Winter Fun for Kids
          </h2>
          <p className="text-md text-gray-700 my-4">
            Keep Them Warm & Stylish!
          </p>
          <button className="border px-4 py-2 rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50">
            Shop Kids' Collection
          </button>
        </div>
        <div className="md:flex-1 mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1546193229-e200b04daf4e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kids playing in snow"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
