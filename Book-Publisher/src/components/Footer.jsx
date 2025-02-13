import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* White Background Section (Author Logos) */}
      <div className="bg-white py-10 flex flex-wrap justify-center gap-6 px-4">
        <img src="/author11.png" alt="Author 1" className="w-32 md:w-44 h-24 object-contain border" />
        <img src="/author11.png" alt="Author 2" className="w-32 md:w-44 h-24 object-contain border" />
        <img src="/author11.png" alt="Author 3" className="w-32 md:w-44 h-24 object-contain border" />
        <img src="/author11.png" alt="Author 4" className="w-32 md:w-44 h-24 object-contain border" />
        <img src="/author11.png" alt="Author 5" className="w-32 md:w-44 h-24 object-contain border" />
      </div>

      {/* Black Background Section (Footer Links) */}
      <div className="bg-black text-white py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Left Logo + Contact */}
          <div>
            <h1 className="text-3xl font-bold flex justify-center md:justify-start">
              <span className="text-red-500">A</span>UTEUR
            </h1>
            <div className="mt-4">
              <p>#1 Murray Street, Woodbrook</p>
              <p className="text-red-400 font-bold text-lg">1 917-991-9010</p>
              <p>info@bookstore.com</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <i className="fab fa-facebook cursor-pointer text-xl"></i>
              <i className="fab fa-twitter cursor-pointer text-xl"></i>
              <i className="fab fa-pinterest cursor-pointer text-xl"></i>
              <i className="fab fa-linkedin cursor-pointer text-xl"></i>
            </div>
          </div>

          {/* Other Footer Links */}
          <div>
            <h3 className="font-bold text-lg">Explore</h3>
            <ul className="mt-3 space-y-2">
              <li>About Us</li>
              <li>Sitemap</li>
              <li>Bookmarks</li>
              <li>Sign in/Join</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="mt-3 space-y-2">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Product Recalls</li>
              <li>Accessibility</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Policy</h3>
            <ul className="mt-3 space-y-2">
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="mt-3 space-y-2">
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
              <li>Horror</li>
              <li>Kids</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Payment Icons (Now in the Same Line) */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-center md:text-start">
          <p>Copyright © 2020 www.bookstore | All Rights Reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <img src="/visa.png" alt="Visa" className="w-12 h-8" />
            <img src="/mastercard.png" alt="Mastercard" className="w-12 h-8" />
            <img src="/discover.png" alt="Discover" className="w-12 h-8" />
            <img src="/amex.png" alt="Amex" className="w-12 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
