export default function SizeGuide() {
  const sizeCharts = {
    jackets: [
      { size: "XS", chest: '32-34"', waist: '26-28"', hips: '34-36"' },
      { size: "S", chest: '35-37"', waist: '29-31"', hips: '37-39"' },
      { size: "M", chest: '38-40"', waist: '32-34"', hips: '40-42"' },
      { size: "L", chest: '41-43"', waist: '35-37"', hips: '43-45"' },
      { size: "XL", chest: '44-46"', waist: '38-40"', hips: '46-48"' },
    ],
    accessories: [
      { size: "One Size", description: "Fits most adults" },
      { size: "S/M", description: 'Fits head circumference 21-22"' },
      { size: "L/XL", description: 'Fits head circumference 23-24"' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-tafabricans text-center text-3xl font-bold text-gray-900 mb-8">
        Size Guide
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-6">
            Jackets & Coats
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chest
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Waist
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hips
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sizeCharts.jackets.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.chest}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.waist}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.hips}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-6">
            Accessories
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sizeCharts.accessories.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-4">
            How to Measure
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Chest:</strong> Measure around the fullest part of your
              chest, keeping the tape horizontal.
            </p>
            <p>
              <strong>Waist:</strong> Measure around your natural waistline,
              keeping the tape comfortably loose.
            </p>
            <p>
              <strong>Hips:</strong> Measure around the fullest part of your
              hips, keeping the tape horizontal.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
