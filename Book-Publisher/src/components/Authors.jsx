export default function Author() {
  return (
    <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/author-bg.jpg')" }}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Book Images */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img src="/images/book-display.jpg" alt="Books" className="max-w-full lg:max-w-lg rounded-lg shadow-lg" />
        </div>

        {/* Right Side: Text & Stats */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-white">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold">TOP AUTHORS</h2>
          <p className="text-lg text-white-400 font-semibold mt-2 uppercase">The Journey of Dreams</p>
          
          {/* Description */}
          <p className="mt-4 text-white font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4  gap-6">
            <div className="border border-gray-400 p-4 w-28 text-center bg-orange-900 rounded-md">
              <h3 className="text-2xl font-bold text-white">80k</h3>
              <p className="text-sm text-gray-300">Active Readers</p>
            </div>
            <div className="border border-gray-400 p-4 w-28 text-center bg-orange-900 rounded-md">
              <h3 className="text-2xl font-bold text-white">+3k</h3>
              <p className="text-sm text-gray-300">Total Pages</p>
            </div>
            <div className="border border-gray-400 w-28 p-4 text-center bg-orange-900 rounded-md">
              <h3 className="text-2xl font-bold text-white">283</h3>
              <p className="text-sm text-gray-300">Cups of Coffee</p>
            </div>
            <div className="border border-gray-400 w-28 p-4 text-center bg-orange-900 rounded-md">
              <h3 className="text-2xl font-bold text-white">14k</h3>
              <p className="text-sm text-gray-300">Facebook Fans</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
