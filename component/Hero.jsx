"use client";

import Link from "next/link";   
import { useEffect, useState } from "react";

export default function Hero() {
  const backgrounds = [
    "/hero1avif.avif",
    "/hero2.jpg",
    "/hero3.avif",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[70vh] p-6 flex items-center transition-all duration-700"
      style={{ backgroundImage: `url(${backgrounds[index]})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Your Dream Event!
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-4">
          We create unforgettable weddings, birthdays, corporate events, and more.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
