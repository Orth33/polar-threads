export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        About Polar Threads
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1598775378121-e24f7062c151?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our store"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded in 2020, Polar Threads was born from a passion for quality
              winter wear and a commitment to keeping our customers warm and
              stylish during the coldest months of the year.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We believe that winter wear should be both functional and
              fashionable. Our mission is to provide high-quality, sustainable
              winter clothing that keeps you warm without compromising on style.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quality Promise
            </h2>
            <p className="text-gray-600">
              Every piece in our collection is carefully selected and tested to
              ensure it meets our high standards for quality, durability, and
              comfort. We stand behind every product we sell.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We're committed to reducing our environmental impact through
              sustainable materials and ethical manufacturing processes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Quality
            </h3>
            <p className="text-gray-600">
              We never compromise on quality, ensuring that each product meets
              our rigorous standards for durability and performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community
            </h3>
            <p className="text-gray-600">
              We believe in building a community of winter enthusiasts and
              supporting local initiatives that promote outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
