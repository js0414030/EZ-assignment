import { motion } from "framer-motion";
import teamSilhouette from "../assets/Group 2.svg";
import indiaGate from "../assets/136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.svg";
import stickyNote from "../assets/Group 9.png";
import arrowLeft from "../assets/Vector.svg";
import arrowRight from "../assets/Vector-2.svg";
import arrowDown from "../assets/Vector-1.svg";
import scrollIcon from "../assets/Scroll.svg";

const AboutTeam = () => {
  return (
    <section
      className="relative bg-[#fffaf5] min-h-screen px-4 md:px-16 py-20 md:py-24 flex flex-col items-center justify-center overflow-hidden"
      style={{
       
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Sticky Note (top-left) */}
      <motion.div
        className="absolute top-10 left-4 md:top-16 md:left-20 w-[260px] md:w-[400px] rotate-[-4deg] z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={stickyNote}
          alt="Creative Note"
          className="drop-shadow-lg rounded-md w-full h-auto"
        />
      </motion.div>

      {/* India Gate Illustration (bottom-left) */}
      <motion.img
        src={indiaGate}
        alt="India Gate Illustration"
        className="absolute bottom-10 left-4 md:bottom-16 md:left-12 w-40 md:w-72 opacity-90 z-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Team Silhouette Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center mt-32 md:mt-40 z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Team Silhouette Image */}
        <img
          src={teamSilhouette}
          alt="Team Members Silhouette"
          className="w-[95%] md:w-[85%] mx-auto opacity-95 md:translate-x-[20%]"
        />

        {/* Film Makers Label (center-top) */}
        <div className="absolute -top-20 md:-top-28 flex flex-col items-center text-center">
          <p className="text-[#1f1f1f] italic font-playfair text-lg md:text-2xl">
            Film Makers
          </p>

          <motion.img
            src={arrowDown}
            alt="Downward Arrow"
            className="mt-2 md:mt-4 w-[90px] md:w-[150px] h-auto opacity-95"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          />
        </div>

        {/* Branding Experts (left) */}
        <p className="absolute top-[70%] left-[5%] md:left-[1%] rotate-[-6deg] text-[#1f1f1f] italic font-playfair text-sm md:text-xl whitespace-nowrap">
          Branding Experts
        </p>

        {/* Art Curators (right) */}
        <p className="absolute top-[25%] right-[1%] md:right-[-30%] rotate-[6deg] text-[#1f1f1f] italic font-playfair text-sm md:text-xl whitespace-nowrap">
          Art Curators
        </p>
      </motion.div>

      {/* Left Arrow */}
      <motion.img
        src={arrowLeft}
        alt="Left Arrow"
        className="absolute left-[25%] md:left-[30%] top-[45%] w-14 md:w-24 rotate-[8deg] opacity-100 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />

      {/* Right Arrow */}
      <motion.img
        src={arrowRight}
        alt="Right Arrow"
        className="absolute right-[20%] md:right-[18%] top-[48%] w-14 md:w-24 rotate-[-8deg] opacity-90 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />

      {/* Scroll Icon */}
      <motion.img
        src={scrollIcon}
        alt="Scroll Icon"
        className="absolute bottom-12 md:bottom-14 right-[50%] translate-x-1/2 w-8 md:w-12 opacity-90 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      />

      {/* CTA Section */}
      <motion.div
        className="mt-16 md:mt-20 text-center z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <p className="text-gray-800 text-sm md:text-lg font-poppins leading-relaxed mb-4">
          Take a closer look at the stories V bring to life.
        </p>
        <a
          href="/portfolio"
          className="inline-block bg-[#ff7a00] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-medium shadow-md hover:shadow-lg transition"
        >
          View Portfolio
        </a>
      </motion.div>
    </section>
  );
};

export default AboutTeam;
