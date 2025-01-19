import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
      <div className="text-center mb-16">
        <h1 className="font-tafabricans text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-sm">We'd love to hear from you!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-4">
              Store Location
            </h2>
            {/* <p className="text-gray-600 mb-2">123 Winter Street</p>
            <p className="text-gray-600 mb-2">Snowville, FR 12345</p>
            <p className="text-gray-600 mb-4">United States</p> */}
            <div className="group cursor-pointer">
              <div className="flex items-start transition-all duration-300 hover:translate-x-2">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-[var(--primaryColor)] transition-colors">
                    Visit Us
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Our office location
                  </p>
                  <address className="text-sm text-gray-500">
                    123 Winter Street
                    <br />
                    Snowville, FR 12345
                    <br />
                    United States, BC 12345
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-tafabricans font-medium text-black mb-6 flex items-center">
                Business Hours
                <div className="h-1 w-4 rounded-full ml-2"></div>
              </h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="font-medium text-gray-800">8:00 AM - 5:00 PM</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <p className="text-gray-600">Saturday - Sunday</p>
                  <p className="font-medium text-gray-800">Closed</p>
                </div>
              </div>
            </div>

            {/* <h3 className="font-tafabricans text-xl font-semibold text-gray-900 mb-2">
              Hours
            </h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 9AM - 8PM</p>
            <p className="text-gray-600 mb-1">Saturday: 10AM - 6PM</p>
            <p className="text-gray-600">Sunday: Closed</p> */}
          </div>

          <div className="bg-white flex flex-col rounded-lg shadow-md p-6">
            <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-4">
              Contact Info
            </h2>
            <a
              href="tel:(555) 123-4567"
              className="text-sm text-[var(--primaryColor)] hover:underline inline-flex items-center gap-2 group"
            >
              <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>

            <a
              href="mailto:info@polarthreads.com"
              className="text-sm hover:underline inline-flex items-center gap-2 group"
            >
              <p className="text-gray-600 mb-2">Email: info@polarthreads.com</p>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>

            {/* <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p> */}
            {/* <p className="text-gray-600 mb-2">Email: info@polarthreads.com</p> */}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-tafabricans text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h2>
          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex-grow flex flex-col"
          >
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                required
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-10 mb-4 px-6 py-2 border rounded-md border-gray-400 text-gray-600 text-base font-medium hover:bg-black transition-colors duration-500 hover:text-white active:scale-95"
            >
              Send Message
              {/* <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              /> */}
            </button>
          </form>

          {/* <form onSubmit={handleSubmit} className="space-y-4">
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
          </form> */}
        </div>
      </div>
    </div>
  );
}
