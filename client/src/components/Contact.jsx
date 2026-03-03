"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.subject,   // important (your template uses {{title}})
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_aa4sd",
        "template_aa4sd",
        templateParams,
        "dsiNakpGTPFqMzqZO"
      );

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Fill The Form Below
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="input-style"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="input-style"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone number"
                className="input-style"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="input-style"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <textarea
              rows="6"
              placeholder="Write message"
              className="input-style"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white px-8 py-3 rounded-full"
            >
              {loading ? "Sending..." : "Submit Form"}
            </button>
          </form>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold mb-6 dark:text-white">
            Contact Info
          </h3>

          <p className="dark:text-gray-300">Email: contact.aa4sd@gmail.com</p>

          <div className="mt-14 rounded-xl overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-64"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;