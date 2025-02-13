import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/bg-1.jpeg')" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-900">Lorem Ipsum</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-red-600">Lorem Ipsum</h2>
          <p className="text-white mt-4 w-3/4 md:w-2/3 mx-auto text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-red-600">
            View More
          </button>
        </div>
      </div>
    </header>
  );
}
