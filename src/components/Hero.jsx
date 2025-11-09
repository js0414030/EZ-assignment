import { motion } from "framer-motion";
import vfilmsLogo from "../assets/VFilms Logo.png";
import mandala from "../assets/Hero/Hero Mandala.svg";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 bg-[#fffaf5] overflow-hidden"
      style={{
        
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Mandala Background Behind Logo */}
      <div className="relative flex justify-center items-center md:w-1/2 z-10">
        <img
          src={mandala}
          alt="Mandala"
          className="absolute left-1/2 top-1/2 w-[600px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-100"
        />
        <motion.img
          src={vfilmsLogo}
          alt="V Films Logo"
          className="relative w-[250px] md:w-[340px] z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right: Tagline and Text */}
      <motion.div
        className="text-center md:text-left md:w-1/2 z-10 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl font-playfair italic text-[#1c1c1c] leading-snug mb-6">
          Varnan is where stories find <br /> their voice and form
        </h1>

        {/* Subheading */}
        <h2 className="text-lg md:text-xl font-serif text-[#b1471c] mb-8 tracking-wide">
          Films . Brands . Art
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base font-light">
          Since 2009, V’ve been telling stories — stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way —
          by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what
          truly matters. <br />
          V doesn’t just tell stories — V honors them.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
