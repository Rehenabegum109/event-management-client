// app/components/Footer.jsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 text-center">
          <li><a href="#features" className="hover:text-blue-400">Features</a></li>
          <li><a href="#events" className="hover:text-blue-400">Events</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          &copy; 2025 EventHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
