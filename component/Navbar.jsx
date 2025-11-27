'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useAuth } from '../component/Context/AuthProvider' 
import logo from '../public/download.jpg'

export default function Navbar() {
  const { user, logout } = useAuth()   
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-[#dfe6e9] sticky top-0 shadow z-50">
      <div className="container mx-auto px-4">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} width={80} height={50} alt="Logo" className="rounded cursor-pointer" />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/event" className="hover:text-blue-600">Events</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <Link href="/login">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {user.email} ▼
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border rounded w-44 shadow">
                    <p className="px-4 py-2 border-b text-sm text-gray-700">{user.email}</p>
                    <Link href="/add-event" className="block px-4 py-2 hover:bg-gray-100">Add Event</Link>
                    <Link href="/manage-event" className="block px-4 py-2 hover:bg-gray-100">Manage Events</Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center h-16">
          <Link href="/">
            <Image src={logo} width={60} height={30} alt="Logo" className="rounded cursor-pointer" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <Link href="/" className="block px-4 py-3 border-b hover:bg-gray-100">Home</Link>
          <Link href="/event" className="block px-4 py-3 border-b hover:bg-gray-100">Events</Link>
          <Link href="/about" className="block px-4 py-3 border-b hover:bg-gray-100">About</Link>
          <Link href="/contact" className="block px-4 py-3 border-b hover:bg-gray-100">Contact</Link>

          {!user ? (
            <>
              <Link href="/login" className="block px-4 py-3 border-b hover:bg-gray-100">Login</Link>
              <Link href="/register" className="block px-4 py-3 hover:bg-gray-100">Register</Link>
            </>
          ) : (
            <>
              <p className="px-4 py-3 text-gray-600 border-b">{user.email}</p>
              <Link href="/add-event" className="block px-4 py-3 border-b hover:bg-gray-100">Add Product</Link>
              <Link href="/manage-event" className="block px-4 py-3 border-b hover:bg-gray-100">Manage Products</Link>
              <button onClick={logout} className="w-full text-left px-4 py-3 hover:bg-gray-100">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

