import { useState } from "react";

const books = [
  {
    id: 1,
    image: "/book1.jpg",
    title: "The Forest",
    description: "Lorem ipsum dolor sit amet, tetur piscining elit. Suspendisse smod",
    price: "$42",
  },
  {
    id: 2,
    image: "/book2.jpg",
    title: "The Forest",
    description: "Lorem ipsum dolor sit amet, tetur piscining elit. Suspendisse smod",
    price: "$42",
  },
  {
    id: 3,
    image: "/book3.jpg",
    title: "The Forest",
    description: "Lorem ipsum dolor sit amet, tetur piscining elit. Suspendisse smod",
    price: "$42",
  },
  {
    id: 4,
    image: "/book4.jpg",
    title: "The Forest",
    description: "Lorem ipsum dolor sit amet, tetur piscining elit. Suspendisse smod",
    price: "$42",
  },
];

export default function BookList() {
  const [activeTab, setActiveTab] = useState("NEW RELEASES");

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            DISCOVER YOUR NEXT BOOK
          </h2>
          <div className="flex justify-center gap-6 mt-4 text-sm md:text-base">
            {["NEW RELEASES", "COMING SOON", "BEST SELLERS", "AWARD WINNERS"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase font-semibold ${
                  activeTab === tab ? "text-red-500" : "text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
          
          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/side1.jpg" 
              alt="Featured Books" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Book List */}
          <div className="md:w-1/2 bg-gray-200 rounded-lg p-8 md:p-12 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book) => (
                <div key={book.id} className="flex bg-white rounded-lg shadow-md">
                  {/* Book Image */}
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-1/3 object-cover rounded-l-lg"
                  />

                  {/* Book Details */}
                  <div className="p-4 w-2/3">
                    <h3 className="text-red-500 font-semibold">{book.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{book.description}</p>
                    <p className="text-gray-900 font-bold mt-2">{book.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
