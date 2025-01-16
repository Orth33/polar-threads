import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import InstallmentBanner from "../components/InstallmentBanner";
import { TestimonialsSection } from "../components/ui/testimonials-with-marquee";
import NewsletterSignup from "../components/NewsletterSignup";
// import FlashSaleBanner from "../components/FlashSaleBanner";
import KidsSection from "../components/KidsSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  const slideFromBottom = {
    initial: { opacity: 1, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const slidwewFAromLeft = {
    initial: { x: 150 },
    whileInView: { x: 0 },
    viewport: { once: true },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
  };

  const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  return (
    <div>
      <Carousel />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        {...slideFromBottom}
      >
        <motion.h2
          className="font-tafabricans text-3xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Featured Products
        </motion.h2>
        <FeaturedProducts />
      </motion.div>

      <motion.div {...slideFromLeft}>
        <KidsSection />
      </motion.div>

      <motion.div {...slideFromRight}>
        <InstallmentBanner />
      </motion.div>

      <motion.div {...slideFromLeft}>
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <NewsletterSignup />
      </motion.div>
    </div>
  );
}
