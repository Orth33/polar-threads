export default function ShippingPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <div className="text-center">
        <h1 className="font-tafabricans text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center inline-block text-transparent bg-clip-text">
          Shipping Policy
        </h1>
      </div> */}

      <div className="space-y-8">
        <section>
          <h2 className="font-tafabricans text-xl font-semibold text-gray-900 mb-4">
            Processing Time
          </h2>
          <p className="text-gray-600">
            All orders are processed within 1-2 business days. Orders placed on
            weekends or holidays will be processed the next business day.
          </p>
        </section>

        <section>
          <h2 className="font-tafabricans text-xl font-semibold text-gray-900 mb-4">
            Shipping Methods & Times
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Standard Shipping (5-7 business days) - $9.99</li>
            <li>Express Shipping (2-3 business days) - $14.99</li>
            <li>Next Day Delivery (1 business day) - $24.99</li>
          </ul>
        </section>

        <section>
          <h2 className="font-tafabricans text-xl font-semibold text-gray-900 mb-4">
            International Shipping
          </h2>
          <p className="text-gray-600">
            We currently ship to select international destinations.
            International shipping rates vary by location and will be calculated
            at checkout.
          </p>
        </section>

        <section>
          <h2 className="font-tafabricans text-xl font-semibold text-gray-900 mb-4">
            Order Tracking
          </h2>
          <p className="text-gray-600">
            Once your order ships, you will receive a tracking number via email.
            You can track your order status through our website or the carrier's
            tracking portal.
          </p>
        </section>
      </div>
    </div>
  );
}
