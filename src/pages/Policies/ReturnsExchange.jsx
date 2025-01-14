export default function ReturnsExchange() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Exchanges</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Return Policy</h2>
          <p className="text-gray-600">
            We accept returns within 30 days of purchase. Items must be unworn, unwashed, and
            have all original tags attached. Returns are free for store credit, or a $7.99
            return shipping fee will be deducted for refunds to the original payment method.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Exchange Process</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Initiate your exchange through your account or contact customer service</li>
            <li>Print the provided return label</li>
            <li>Pack the item(s) securely with all original tags</li>
            <li>Drop off the package at any authorized shipping location</li>
            <li>Receive your exchange item within 5-7 business days</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Non-Returnable Items</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sale items marked as final sale</li>
            <li>Intimates and swimwear</li>
            <li>Items damaged through customer use</li>
            <li>Gift cards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Refund Processing</h2>
          <p className="text-gray-600">
            Refunds will be processed within 5-7 business days of receiving your return.
            The refund will be issued to the original payment method used for the purchase.
          </p>
        </section>
      </div>
    </div>
  );
}