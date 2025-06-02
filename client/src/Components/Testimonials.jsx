import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohit S., SEO Agency Owner",
    text: "“I manage 80+ GBP profiles — this platform cut my time in half.”",
  },
  {
    name: "Jennifer R., Spa Owner",
    text: "“We got 3X more calls after just 1 month of consistent optimization.”",
  },
  {
    name: "Arjun M., Freelancer",
    text: "“Post generator + auto review replies = game-changer!”",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    if (index < testimonials.length - 1) {
      setDirection("right");
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection("left");
      setIndex(index - 1);
    }
  };

  const testimonial = testimonials[index];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 font-poppins">
      <div className="max-w-3xl mx-auto text-center text-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">💬 What Our Customers Say</h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-200 p-3 rounded-full shadow z-10 transition disabled:opacity-30"
            disabled={index === 0}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {/* Animated Testimonial Box */}
          <div className="w-full px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white rounded-2xl p-8 shadow-lg min-h-[200px]"
              >
                <p className="text-xl sm:text-2xl font-medium mb-4">{testimonial.text}</p>
                <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-200 p-3 rounded-full shadow z-10 transition disabled:opacity-30"
            disabled={index === testimonials.length - 1}
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>

        <p className="mt-10 text-black/60 text-sm sm:text-base">
          🛡️ Verified reviews from real users. Used by over 5,000+ businesses worldwide.
        </p>
      </div>
    </section>
  );
}
