import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const authors = [
  { id: 1, image: "/user1.jpeg", name: "A G Riddle", books: "3 Published Books" },
  { id: 2, image: "/user2.png", name: "A G Riddle", books: "3 Published Books" },
  { id: 3, image: "/user1.jpeg", name: "A G Riddle", books: "3 Published Books" },
  { id: 4, image: "/user2.png", name: "A G Riddle", books: "3 Published Books" },
  { id: 5, image: "/user1.jpeg", name: "A G Riddle", books: "3 Published Books" },
  { id: 6, image: "/user2.png", name: "A G Riddle", books: "3 Published Books" },
];

const LatestAuthor = () => {
  return (
    <div className="py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-black">LATEST RELEASES</h2>
      <p className="text-red-500 mt-2 uppercase text-sm md:text-base">
        Lorem ipsum dolor sit amet conse ctetur
      </p>

      {/* Author List - Horizontal Scrolling for Small Screens */}
      <div className="relative flex items-center justify-center mt-8">
        {/* Left Arrow */}
        <button className="absolute left-2 md:-left-10 text-gray-600 hover:text-black text-xl md:text-2xl">
          <FaChevronLeft />
        </button>

        {/* Authors in a Single Line */}
        <div className="flex overflow-x-auto no-scrollbar space-x-8 px-6 md:px-12 py-4">
          {authors.map((author) => (
            <div key={author.id} className="text-center flex-shrink-0 w-32 md:w-40">
              <img
                src={author.image}
                alt={author.name}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto"
              />
              <h3 className="mt-2 font-semibold text-sm md:text-lg">{author.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{author.books}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 md:-right-10 text-gray-600 hover:text-black text-xl md:text-2xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default LatestAuthor;
