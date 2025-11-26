// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Event Management</h2>
          <p className="text-gray-100 text-sm">
            Making every moment unforgettable. We organize, manage, and promote events with precision and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Blog</a>
            </li>
          </ul>
        </div>

        {/* Subscribe / Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l bg-white text-gray-800 w-full"
            />
            <button className="bg-gray-900 text-white px-4 rounded-r hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook"/>
            </a>
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter"/>
            </a>
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn"/>
            </a>
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram"/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Event Management App. All rights reserved.
      </div>
    </footer>
  )
}
