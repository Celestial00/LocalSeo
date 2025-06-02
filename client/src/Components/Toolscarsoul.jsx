import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const toolsData = [
  {
    title: "🔍 AI-Based GBP Optimization Assistant",
    features: [
      "Auto-fill everything — from business descriptions to categories and services — based on your keywords.",
      "✔️ Save hours of manual editing",
      "✔️ SEO-optimized content generation",
      "✔️ 100% Google-friendly",
    ],
  },
  {
    title: "🏗️ Auto Citation Checker, Builder & Syncer",
    features: [
      "Scan your NAP (Name, Address, Phone) accuracy across 100+ directories.",
      "✔️ Identify inconsistent/missing listings",
      "✔️ Fix with one click",
      "✔️ Build citations from scratch",
      "✔️ Auto-update across platforms",
    ],
  },
  {
    title: "✍️ Auto Google Posts + Social Media Scheduler",
    features: [
      "Write once, post everywhere.",
      "✔️ AI-powered post writing from keywords",
      "✔️ Schedule posts for GBP + Facebook + Instagram + LinkedIn",
      "✔️ Boost engagement and GBP activity",
    ],
  },
  {
    title: "💬 Auto Review Reply Generator",
    features: [
      "Never miss another review.",
      "✔️ Auto-generate personalized replies (with keywords!)",
      "✔️ Save response templates",
      "✔️ Build customer trust and boost ranking",
    ],
  },
  {
    title: "📊 Live Keyword Rank Tracker",
    features: [
      "Track where your business ranks on Google for targeted keywords.",
      "✔️ Daily/weekly updates",
      "✔️ Track keyword performance in different cities",
      "✔️ See what works, tweak what doesn’t",
    ],
  },
  {
    title: "🧠 AI to Human Content Converter",
    features: [
      "Turn robotic content into natural-sounding human writing.",
      "✔️ Maintain SEO keywords",
      "✔️ Avoid AI-detection penalties",
      "✔️ Tools included: HumanizeAI, AI Detectors",
    ],
  },
  {
    title: "📇 Digital Business Card Builder",
    features: [
      "Build a mobile-ready, shareable business card.",
      "✔️ Linked directly to your GBP",
      "✔️ Contact info, reviews, maps, social links — in one place",
      "✔️ Perfect for WhatsApp, Email, QR Code",
    ],
  },
  {
    title: "🔑 High-Intent Keyword Finder",
    features: [
      "Discover the highest-value local keywords in your niche.",
      "✔️ Based on category + service area",
      "✔️ Get instant content/post ideas",
      "✔️ Optimize like an expert",
    ],
  },
  {
    title: "📈 All-in-One SEO Toolkit",
    features: [
      "Essential utilities, built in.",
      "✔️ Plagiarism Checker",
      "✔️ AI Content Detector",
      "✔️ Word Counter",
      "✔️ Readability Score",
      "✔️ Keyword Density Checker",
    ],
  },
  {
    title: "🔄 Full GBP + Social Integration",
    features: [
      "Sync all tools to work together:",
      "✔️ Real-time GBP data updates",
      "✔️ Cross-posting across platforms",
      "✔️ Activity reporting in one dashboard",
    ],
  },
];

export default function ToolsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    if (startIndex + 6 < toolsData.length) {
      setDirection("right");
      setStartIndex(startIndex + 6);
    }
  };

  const handlePrev = () => {
    if (startIndex - 6 >= 0) {
      setDirection("left");
      setStartIndex(startIndex - 6);
    }
  };

  const visibleTools = toolsData.slice(startIndex, startIndex + 6);

  return (
    <section
      className="bg-[#f7f7f7] py-16 px-4 sm:px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
          Top 10+ Game-Changing Features
        </h2>

        <div className="relative px-4 sm:px-8">
  {/* Arrows */}
  <button
    onClick={handlePrev}
    className="absolute left-2 sm:-left-8 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-3 z-10 hover:bg-gray-100"
    disabled={startIndex === 0}
  >
    <ChevronLeft className="h-6 w-6 text-gray-700" />
  </button>

  <button
    onClick={handleNext}
    className="absolute right-2 sm:-right-8 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-3 z-10 hover:bg-gray-100"
    disabled={startIndex + 6 >= toolsData.length}
  >
    <ChevronRight className="h-6 w-6 text-gray-700" />
  </button>

  {/* Carousel */}
  <AnimatePresence mode="wait">
    <motion.div
      key={startIndex}
      initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {visibleTools.map((tool, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all h-full"
        >
          <h3 className="text-lg font-semibold text-[#00D4ff] mb-3">
            {tool.title}
          </h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none pl-0">
            {tool.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>
      </div>
    </section>
  );
}
