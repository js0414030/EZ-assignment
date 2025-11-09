import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form);
      if (res.status === 200) {
        setStatus("Form Submitted ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-100 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-3 rounded" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-3 rounded" />
          <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="w-full border p-3 rounded" rows="4"></textarea>
          <button type="submit" disabled={loading} className="bg-accent text-white px-6 py-3 rounded w-full">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
