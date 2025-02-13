import { FaBookOpen, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            WELCOME TO AUTEUR
          </h2>
          <p className="text-red-500 text-sm md:text-base font-semibold mt-2">
            LOREM IPSUM DOLOR SIT AMET CONSE CTETUR
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          
          {/* Left Side Image */}
          <div className="md:w-1/2 mh-full flex justify-center">
            <img 
              src="/side2.jpg" 
              alt="Book Mockup" 
              className="max-w-full md:max-w-lg drop-shadow-lg"
            />
          </div>

          {/* Right Side Text Section */}
          <div className="md:w-1/2 bg-gray-100 p-6 md:p-10 rounded-lg shadow-md">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Feature Box 1 */}
              <div className="flex flex-col items-center text-center">
                <FaBookOpen className="text-5xl text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">LOREM IPSUM</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Feature Box 2 */}
              <div className="flex flex-col items-center text-center">
                <FaLaptopCode className="text-5xl text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">LOREM IPSUM</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Feature Box 3 */}
              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-5xl text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">LOREM IPSUM</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Feature Box 4 */}
              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-5xl text-red-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">LOREM IPSUM</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
