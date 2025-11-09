import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

// Assets
import camLeft from "../assets/Cam Group.svg";
import videoThumb from "../assets/Portfolio.png";
import ArrowIcon from "../assets/Services/Icon.svg";

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const videos = [
    {
      id: 1,
      title: "The Highlight Reel",
      thumbnail: videoThumb,
      url: "https://www.youtube.com/", // sample YouTube link
    },
  ];

  // Navigation Handlers
  const nextVideo = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section
      className="relative bg-[#fffaf5] min-h-screen px-4 md:px-16 py-20 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Hero/background-pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Decorative Camera (left) */}
      <motion.img
        src={camLeft}
        alt="Camera Illustration"
        className="absolute left-2 md:left-16 top-[20%] w-28 sm:w-36 md:w-56 opacity-90 z-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Section Heading */}
      <motion.div
        className="text-center mb-10 z-10 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-[#2e2e2e] mb-2">
          The Highlight Reel
        </h1>
        <p className="text-gray-700 italic font-poppins text-sm md:text-base">
          Watch the magic we’ve captured.
        </p>
      </motion.div>

      {/* Film Frame Container */}
      <motion.div
        className="relative flex items-center justify-center w-full max-w-5xl z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevVideo}
          className="absolute left-2 sm:left-6 md:left-10 bg-white shadow-md p-2 sm:p-3 rounded-full hover:scale-110 transition z-20"
        >
          <img
            src={ArrowIcon}
            alt="Previous Video"
            className="w-4 sm:w-5 md:w-6 h-auto"
          />
        </button>

        {/* Video Frame */}
        <div className="relative w-[90%] sm:w-[80%] md:w-[720px] aspect-video rounded-lg overflow-hidden shadow-xl border-[6px] sm:border-[8px] md:border-[10px] border-gray-300">
          <img
            src={videos[current].thumbnail}
            alt={videos[current].title}
            className="object-cover w-full h-full"
          />
          {/* Play Button Overlay */}
          <button
            onClick={() => window.open(videos[current].url, "_blank")}
            className="absolute inset-0 flex items-center justify-center text-white"
          >
            <div className="bg-red-600 rounded-full p-4 sm:p-5 md:p-6 hover:scale-110 transition">
              <FaPlay className="text-xl sm:text-2xl md:text-3xl" />
            </div>
          </button>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextVideo}
          className="absolute right-2 sm:right-6 md:right-10 bg-white shadow-md p-2 sm:p-3 rounded-full hover:scale-110 transition z-20"
        >
          <img
            src={ArrowIcon}
            alt="Next Video"
            className="w-4 sm:w-5 md:w-6 h-auto rotate-180"
          />
        </button>
      </motion.div>

      {/* Optional Caption / Footer */}
      <motion.p
        className="text-gray-700 text-xs sm:text-sm md:text-base mt-8 text-center font-light z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        Capturing stories that move hearts — one frame at a time.
      </motion.p>
    </section>
  );
};

export default Portfolio;
