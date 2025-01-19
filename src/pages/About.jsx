export default function About() {
  return (
    <div>
      <div className="relative w-full h-[650px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Our store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <h1 className="font-tafabricans text-4xl font-bold text-gray-900 mb-8">
        About Polar Threads
      </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <div className="space-y-6"> */}
          <div>
            <h2 className="font-tafabricans text-2xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded in 2020, Polar Threads was born from a passion for quality
              winter wear and a commitment to keeping our customers warm and
              stylish during the coldest months of the year.
            </p>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWEwdmtvbHp0dTJ2enJlam1uN25sN2pmdTR1cXhpb2N5eHBpMDAwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iB37W6VDrWWAw/giphy.gif"
              alt="Winter fashion"
              className="w-[400px] h-[250px] mt-4 rounded-lg shadow-lg overflow-hidden"
            />
          </div>

          <div>
            <h2 className="font-tafabricans text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We believe that winter wear should be both functional and
              fashionable. Our mission is to provide high-quality, sustainable
              winter clothing that keeps you warm without compromising on style.
            </p>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGhzYWNhYjY3N3prN2NocWVpaDMyN2I3MW53OTJ3dGU2c3E5ZzBnNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vdn1lhtGoWMRW/giphy.gif"
              alt="Winter fashion"
              className="w-[400px] h-[250px] mt-4 rounded-lg shadow-lg overflow-hidden"
            />
          </div>

          {/* <div>
            <h2 className="font-tafabricans text-2xl font-bold text-gray-900 mb-4">
              Quality Promise
            </h2>
            <p className="text-gray-600">
              Every piece in our collection is carefully selected and tested to
              ensure it meets our high standards for quality, durability, and
              comfort. We stand behind every product we sell.
            </p>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanhuN2t5c3VoM2duaXRxdzgzbDk1cTJ5a2gzdGJhdHNjN203aXFuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xeRIgCObC7w7Q7fIZ4/giphy.gif"
              alt="Winter fashion"
              className="w-[400px] h-[250px] mt-4 rounded-lg shadow-lg overflow-hidden"
            />
          </div> */}
          {/* </div> */}
        </div>

        <div className="mt-12">
          <h2 className="font-tafabricans text-2xl font-bold text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-tafabricans text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to reducing our environmental impact through
                sustainable materials and ethical manufacturing processes.
              </p>
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDhrcHlsbnlyZjdmbDNwY2lzdmZvdG51OGlsbGQ1eGNwNmNqeHd0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YqbUp2Lrhtoy8MtlGl/giphy.gif"
                alt="Sustainability"
                className="mt-4 rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-tafabricans text-xl font-semibold text-gray-900 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring that each product meets
                our rigorous standards for durability and performance.
              </p>
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmhkcThrc3I2ODFuYWpmeDNlb2czNnIxcTZrajNycDd2MHAweDE1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DebOzNVDQYum13U7zM/giphy.gif"
                alt="Quality"
                className="w-full h-[336px] mt-4 rounded-lg shadow-lg overflow-hidden"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-tafabricans text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We believe in building a community of winter enthusiasts and
                supporting local initiatives that promote outdoor activities.
              </p>
              <img
                src="https://media.giphy.com/media/3o84sBmXpVo5W/giphy.gif"
                alt="Community"
                className="w-full h-[336px] mt-4 rounded-lg shadow-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
