import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import InstallmentBanner from "../components/InstallmentBanner";
import CustomerReviews from "../components/CustomerReviews";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-tafabricans text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <FeaturedProducts />
      </div>
      <div className="mt-10">
        <InstallmentBanner />
      </div>
      <div className="mt-16">
        <CustomerReviews />
      </div>
      <div className="mt-16">
        <NewsletterSignup />
      </div>
    </div>
  );
}
