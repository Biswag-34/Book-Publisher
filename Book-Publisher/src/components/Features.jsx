import { FaTruck, FaGift, FaCreditCard, FaHeadphones } from "react-icons/fa";

export default function Feature() {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-6">
        
        {/* Big div containing all small divs */}
        <div className="flex justify-center items-center gap-8 p-4 max-w-5xl mx-auto">

          {/* Feature Box 1 */}
          <div className="w-1/5 flex flex-col items-center border border-white text-center bg-white p-3 shadow-md rounded-md">
            <FaTruck className="text-3xl text-red-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">LOREM IPSUM</h3>
            <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Feature Box 2 */}
          <div className="w-1/5 flex flex-col items-center border border-white text-center bg-white p-3 shadow-md rounded-md">
            <FaGift className="text-3xl text-red-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">LOREM IPSUM</h3>
            <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Feature Box 3 */}
          <div className="w-1/5 flex flex-col items-center border border-white text-center bg-white p-3 shadow-md rounded-md">
            <FaCreditCard className="text-3xl text-red-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">LOREM IPSUM</h3>
            <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet</p>
          </div>

          {/* Feature Box 4 */}
          <div className="w-1/5 flex flex-col items-center border border-white text-center bg-white p-3 shadow-md rounded-md">
            <FaHeadphones className="text-3xl text-red-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900">LOREM IPSUM</h3>
            <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet</p>
          </div>

        </div>
      </div>
    </section>
  );
}
