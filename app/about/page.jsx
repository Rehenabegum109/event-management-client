
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  { name: "Rehena", role: "Developer & Organizer", image: "https://randomuser.me/api/portraits/women/68.jpg", description: "Manages platform & events.", friendly: 5 },
  { name: "Ayesha", role: "Event Coordinator", image: "https://randomuser.me/api/portraits/women/44.jpg", description: "Coordinates schedules & events.", friendly: 4 },
  { name: "Rafi", role: "Designer", image: "https://randomuser.me/api/portraits/men/32.jpg", description: "Creates UI/UX for smooth navigation.", friendly: 4 },
  { name: "Tanvir", role: "Marketing", image: "https://randomuser.me/api/portraits/men/56.jpg", description: "Promotes events & engages users.", friendly: 4 },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* About Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8 overflow-hidden">
        
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 opacity-30"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />

        <div className="relative lg:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl font-bold">About Our Event Management</h1>
          <p className="text-gray-700 text-lg">
            We specialize in organizing, managing, and promoting events professionally, 
            ensuring every moment becomes unforgettable. Our dedicated team handles all 
            aspects from planning to execution with care and friendliness.
          </p>
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

        <motion.div 
          className="relative lg:w-1/2 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80"
            alt="Event Management"
            className="w-full rounded shadow-lg"
          />
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 mx-auto border-2 border-blue-500" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.description}</p>
              <p>{Array.from({ length: member.friendly }).map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
