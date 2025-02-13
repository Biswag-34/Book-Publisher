const books = [
  {
    id: 1,
    image: "/download1.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet",
    price: "$40",
  },
  {
    id: 2,
    image: "/download1.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet",
    price: "$40",
  },
  {
    id: 3,
    image: "/download3.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet",
    price: "$40",
  },
  {
    id: 4,
    image: "/download4.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet",
    price: "$40",
  },
  {
    id: 5,
    image: "/download5.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet",
    price: "$40",
  },
];

export default function Store() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">BOOK STORE</h2>
        <p className="text-red-500 mt-2 uppercase text-sm md:text-base">
          Lorem ipsum dolor sit amet conse ctetur
        </p>

        {/* Books Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              {/* Book Image */}
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-40 h-56 object-cover rounded-lg shadow-lg"
              />
              
              {/* Price Badge */}
              <div className="relative -mt-6">
                <span className="bg-white text-red-500 font-bold px-4 py-1 rounded-full shadow-md">
                  {book.price}
                </span>
              </div>

              {/* Book Info */}
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.description}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="mt-8 px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
          VIEW MORE
        </button>

      </div>
    </section>
  );
}
