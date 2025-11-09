import { motion } from "framer-motion";
import sunIllustration from "../assets/Frame 33.svg";

const AboutUs = () => {
  return (
    <section
      className="relative bg-[#fffaf5] min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24 overflow-hidden flex flex-col justify-center"
      style={{
        
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Top Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
        {/* LEFT SIDE TEXT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5 md:space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2e2e2e] leading-snug">
            A montage of familiar faces and names.
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Some stories come from the biggest names. <br />
            Others begin with bold, rising voices. <br />
            We’ve been fortunate to walk alongside both — <br />
            listening, creating, and building stories that matter.
          </p>
        </motion.div>

        {/* RIGHT SIDE QUOTE */}
        <motion.div
          className="flex-1 text-center md:text-right relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="italic font-playfair text-lg sm:text-xl md:text-[1.8rem] text-[#1f1f1f] leading-relaxed sm:leading-loose max-w-lg md:max-w-2xl mx-auto md:ml-auto">
            Every project is more than just a brief — <br />
            it’s a new chapter waiting to be written. <br />
            Together, we’ve crafted tales that inspire, <br />
            connect, and endure.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-16 mt-16 sm:mt-20 md:mt-28 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Card 1 */}
        <div className="bg-[#fff9d9] p-8 sm:p-10 md:p-12 rounded-md shadow-md transform rotate-[-4deg] w-40 sm:w-48 md:w-56 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e2e2e]">
            85+
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            Projects
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#fff2e0] p-8 sm:p-10 md:p-12 rounded-md shadow-md transform rotate-[3deg] w-40 sm:w-48 md:w-56 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e2e2e]">
            50+
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            Happy Clients
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#fff8dc] p-8 sm:p-10 md:p-12 rounded-md shadow-md transform rotate-[-3deg] w-40 sm:w-48 md:w-56 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2e2e2e]">
            10+
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            Experts Team
          </p>
        </div>
      </motion.div>

      {/* Decorative Sun Illustration (optional, positioned bottom-right) */}
      <motion.img
        src={sunIllustration}
        alt="Decorative Sun"
        className="absolute bottom-0 right-0 w-[200px] sm:w-[250px] md:w-[320px] opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
};

export default AboutUs;
