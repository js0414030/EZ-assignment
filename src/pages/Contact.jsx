import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import bottomBorder from "../assets/Frame 33.svg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear individual field error
  };

  // Email validation
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email))
      newErrors.email = "Invalid email format.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) {
      setStatus("⚠️ Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form
      );

      if (res.status === 201) {
        setStatus("✅ Form Submitted Successfully!");
        // Clear all fields
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});

        // Hide message after 4 seconds
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-[#fffaf5] min-h-screen px-6 md:px-20 py-24 flex flex-col md:flex-row justify-between items-start overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Hero/background-pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Left Side Text */}
      <motion.div
        className="relative z-10 md:w-1/2 flex items-center h-full mb-10 md:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-800 leading-relaxed max-w-md text-sm md:text-base">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away. <br />
          Let’s catch up over coffee. <br />
          Great stories always begin with a good conversation.
        </p>
      </motion.div>

      {/* Right Side Form */}
      <motion.div
        className="relative z-10 md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2e2e2e] mb-2">
          Join the Story
        </h2>
        <p className="text-gray-700 mb-6">
          Ready to bring your vision to life? Let’s talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={form.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Your message*"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className={`bg-[#ff7a00] text-white px-6 py-2 rounded shadow hover:shadow-md transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </form>

        {/* Status Message */}
        {status && (
          <motion.p
            className={`mt-4 text-sm italic ${
              status.includes("✅")
                ? "text-green-600"
                : status.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {status}
          </motion.p>
        )}

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-700">
          <a
            href="mailto:vernita@varnanfilms.co.in"
            className="text-[#a43f0f] font-medium hover:underline"
          >
            vernita@varnanfilms.co.in
          </a>{" "}
          | <span className="font-medium">+91 98736 84567</span>
        </div>
      </motion.div>

      {/* Decorative Border */}
      <motion.img
        src={bottomBorder}
        alt="Decorative Border"
        className="absolute bottom-0 left-0 w-full opacity-80 z-[5]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

export default Contact;
