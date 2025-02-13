import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">AUTEUR</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/feature" className="hover:text-red-500">Feature</a>
          <a href="/pages" className="hover:text-red-500">Pages</a>
          <a href="/shop" className="hover:text-red-500">Shop</a>
          <a href="/event" className="hover:text-red-500">Event</a>
          <a href="/blog" className="hover:text-red-500">Blog</a>
        </nav>

        {/* Icons (Only visible in Desktop mode) */}
        <div className="hidden md:flex space-x-4">
          <FaSearch className="text-gray-700 hover:text-red-500 cursor-pointer text-xl" />
          <FaShoppingCart className="text-gray-700 hover:text-red-500 cursor-pointer text-xl" />
          <FaUser className="text-gray-700 hover:text-red-500 cursor-pointer text-xl" />
        </div>

        {/* Burger Menu Icon (Appears on Small Screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars className="text-gray-700 text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/80 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-3xl">
            <FaTimes />
          </button>

          {/* Mobile Navigation (Vertical List) */}
          <nav className="flex flex-col space-y-6 text-xl text-center">
            <a href="/" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/feature" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Feature</a>
            <a href="/pages" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Pages</a>
            <a href="/shop" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Shop</a>
            <a href="/event" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Event</a>
            <a href="/blog" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Blog</a>
          </nav>

          {/* Icons in Mobile Menu */}
          <div className="flex space-x-6 text-2xl mt-6">
            <FaSearch className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
}
