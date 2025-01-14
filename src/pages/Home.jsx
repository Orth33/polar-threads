import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import InstallmentBanner from "../components/InstallmentBanner";
import { TestimonialsSection } from "../components/ui/testimonials-with-marquee";
import NewsletterSignup from "../components/NewsletterSignup";
// import FlashSaleBanner from "../components/FlashSaleBanner";
import KidsSection from "../components/KidsSection";
import WhyChooseUs from "../components/WhyChooseUs";

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
      {/* <FlashSaleBanner /> */}
      <KidsSection />
      <div>
        <InstallmentBanner />
      </div>
      <WhyChooseUs />
      <div>
        <TestimonialsSection
          title="Trusted by Winter Fashion Lovers"
          description="See what our customers have to say about their Polar Threads experience"
          testimonials={[
            {
              author: {
                name: "Sarah M.",
                handle: "@sarahm",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
              },
              text: "The winter parka I bought exceeded my expectations. Perfect for harsh winters!",
            },
            {
              author: {
                name: "James K.",
                handle: "@jamesk",
                avatar:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              text: "Great quality products and excellent customer service. Will definitely shop here again.",
            },
            {
              author: {
                name: "Emily R.",
                handle: "@emilyr",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
              },
              text: "Love my new winter boots! They are both stylish and incredibly warm.",
            },
            {
              author: {
                name: "Michael P.",
                handle: "@michaelp",
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              },
              text: "The attention to detail in their winter collection is impressive. Worth every penny!",
            },
          ]}
        />
      </div>
      <div>
        <NewsletterSignup />
      </div>
    </div>
  );
}
