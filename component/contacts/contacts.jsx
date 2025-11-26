"use client"
import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = document.getElementById("contact-section")?.getBoundingClientRect().top;
      if (top && top < window.innerHeight - 100) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact-section"
      className={`max-w-7xl mx-auto px-6 py-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "linear-gradient(to right, #55efc4, #74b9ff)" }}
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6 text-gray-900">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-800">
            Have a question or want to book an event? Contact us and we’ll respond within 24 hours.
          </p>

          <div className="space-y-4 text-gray-800">
            <p><strong>Phone:</strong> <a href="tel:+880123456789" className="text-blue-600 hover:underline">+880 123 456 789</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@eventmanagement.com" className="text-blue-600 hover:underline">info@eventmanagement.com</a></p>
            <p><strong>Address:</strong> 123 Event Street, Dhaka, Bangladesh</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            {["facebook","twitter","linkedin","instagram"].map((social) => (
              <a key={social} href="#" className="hover:scale-110 transition transform">
                <img
                  src={`https://img.icons8.com/ios-filled/24/000000/${social}.png`}
                  alt={social.charAt(0).toUpperCase() + social.slice(1)}
                />
              </a>
            ))}
          </div>

          {/* Optional Map */}
          <div className="mt-6 rounded shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456789!2d90.400123!3d23.780123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c123456789ab%3A0xabcdef1234567890!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
