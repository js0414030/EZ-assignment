import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="bg-[#fffaf5] min-h-screen overflow-hidden"
      style={{
       
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundColor: "#fffaf5", // ✅ same as Hero section
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Intro / Studio Description Section */}
      <section className="py-20 px-6 md:px-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2e2e2e] mb-6">
            Crafting Stories. Building Brands. Inspiring Art.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            At{" "}
            <span className="font-semibold text-[#a43f0f]">V Films</span>, we
            blend art, emotion, and technology to create timeless visuals that
            connect brands with audiences. From short films to brand campaigns
            and creative installations — our work reflects imagination with
            purpose.
          </p>

          <motion.a
            href="/portfolio"
            className="inline-block bg-[#ff7a00] text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition font-medium"
            whileHover={{ scale: 1.05 }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
