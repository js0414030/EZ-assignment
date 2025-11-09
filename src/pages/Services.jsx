import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import tape from "../assets/image 6.png";
import vector from "../assets/Vector 5.svg";
import bottomBorder from "../assets/Frame 33.svg";

// Service images
import service1 from "../assets/Services/service1.png";
import service2 from "../assets/Services/service2.png";
import service3 from "../assets/Services/service3.png";

const Services = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const services = [
    {
      id: 1,
      title: "Film Production",
      image: service1,
      rotate: "-4deg",
      tapeRotate: "-3deg",
      // navigate to the nested services route
      link: "/services/film-production",
    },
    {
      id: 2,
      title: "Branding",
      image: service2,
      rotate: "0deg",
      tapeRotate: "0deg",
      link: "/services/branding",
    },
    {
      id: 3,
      title: "Art Curation",
      image: service3,
      rotate: "4deg",
      tapeRotate: "3deg",
      link: "/services/art-curation",
    },
  ];

  return (
    <section
      className="relative bg-[#fffaf5] min-h-screen px-6 md:px-20 py-24 flex flex-col items-center justify-center overflow-hidden"
      // removed broken background-image URL (was causing 404). Use CSS or a public image at /images/ when available.
      style={{ backgroundColor: "#fffaf5" }}
    >
      {/* Top Heading */}
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-playfair text-xl md:text-2xl text-[#2e2e2e] italic mb-2">
          The storyboard reveals the breadth of our craft.
        </h2>

        {/* Vector underline */}
        <motion.img
          src={vector}
          alt="Brush underline"
          className="w-[320px] md:w-[480px] opacity-90 mt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 z-10">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="relative bg-white shadow-md rounded-md border-4 w-[260px] md:w-[300px] cursor-pointer"
            style={{ transform: `rotate(${service.rotate})` }}
            onClick={() => navigate(service.link)} // ✅ Navigate on click
            whileHover={{
              rotate: 0,
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src={tape}
              alt="Tape"
              className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-36 md:w-40 z-[1000] opacity-90 drop-shadow-md"
              style={{
                transform: `translateX(-50%) rotate(${service.tapeRotate})`,
              }}
            />

            <div className="overflow-hidden rounded-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white py-4">
                <h3 className="text-center text-lg font-medium text-[#2e2e2e] font-poppins">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Border */}
      <motion.img
        src={bottomBorder}
        alt="Decorative Border"
        className="absolute bottom-0 left-0 w-full opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
};

export default Services;
