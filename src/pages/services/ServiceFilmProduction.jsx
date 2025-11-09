import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import filmImage from "../../assets/Services/FlimProduction.png";

import vector3 from "../../assets/Vector 5.svg";
import camera1 from "../../assets/Services/Camera 01.svg";
import camera2 from "../../assets/Services/Camera 02.svg";
import camera3 from "../../assets/Services/Camera 03.svg";
import camera4 from "../../assets/Services/Camera 04.svg";
import arrow from "../../assets/Services/Arrow.svg";

const ServiceFilmProduction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#fffaf5] min-h-screen px-6 md:px-20 py-20 overflow-visible font-poppins">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-6 md:left-16 text-[#2e2e2e] flex items-center gap-2 border border-[#2e2e2e]/30 rounded-full px-3 py-1.5 hover:bg-[#2e2e2e]/10 transition z-[50]"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-sm">← Back</span>
      </motion.button>

      {/* Quote Section */}
      <motion.div
        className="text-center mb-16 relative flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-playfair italic text-lg md:text-2xl text-[#2e2e2e] relative z-[20]">
          “Filmmaking is a chance to live many lifetimes.” – Robert Altman
        </h2>

        {/* Vector underline below heading */}
        <motion.img
          src={vector3}
          alt="Decorative Brush Stroke"
          className="mt-2 w-[65%] md:w-[45%] opacity-90 z-[10]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 relative z-[20]">
        {/* Left: Polaroid Image */}
        <motion.div
          className="bg-white border border-gray-200 shadow-md rounded-md p-3 transform rotate-[-3deg] hover:rotate-0 transition duration-300"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={filmImage}
            alt="Film Production"
            className="rounded-md w-[320px] md:w-[420px] h-[300px] md:h-[400px] object-cover"
          />
          <p className="text-center text-sm md:text-base mt-2 text-gray-600">
            Film Production
          </p>
        </motion.div>

        {/* Right: Description Text */}
        <motion.div
          className="max-w-md text-left text-gray-800 leading-relaxed space-y-4 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Who says films are just an escape? We see them as a way to live many
            lives — to feel, to explore, and to tell stories that stay. And with
            each film, we carry new memories and new reasons to keep creating.
          </p>
          <p className="font-medium">V crafts:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          {/* Explore Button */}
          <motion.button
            className="mt-4 flex items-center gap-2 text-[#2e2e2e] font-semibold hover:text-[#ff4500] transition"
            whileHover={{ x: 5 }}
          >
            Explore Now
            <img src={arrow} alt="arrow" className="w-7 h-7" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Cameras */}
      <motion.img
        src={camera4}
        alt="Camera Icon"
        className="absolute bottom-[15%] left-[6%] w-20 md:w-28 opacity-90 z-[30]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={camera1}
        alt="Camera Icon"
        className="absolute top-[12%] right-[6%] w-18 md:w-24 opacity-90 z-[40]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={camera3}
        alt="Camera Icon"
        className="absolute top-[45%] right-[10%] w-20 md:w-28 opacity-90 z-[50]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={camera2}
        alt="Camera Icon"
        className="absolute bottom-[8%] right-[16%] w-20 md:w-28 opacity-90 z-[30]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default ServiceFilmProduction;
