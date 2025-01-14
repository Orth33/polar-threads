import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-tafabricans text-4xl font-bold text-gray-900 mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-4">
              Store Location
            </h2>
            <p className="text-gray-600 mb-2">123 Winter Street</p>
            <p className="text-gray-600 mb-2">Snowville, FR 12345</p>
            <p className="text-gray-600 mb-4">United States</p>

            <h3 className="font-tafabricans text-xl font-semibold text-gray-900 mb-2">
              Hours
            </h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 9AM - 8PM</p>
            <p className="text-gray-600 mb-1">Saturday: 10AM - 6PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-4">
              Contact Info
            </h2>
            <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-600 mb-2">Email: info@polarthreads.com</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-10 px-6 py-2 border rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
