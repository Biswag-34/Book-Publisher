import { FaStar } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Testimonial Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">TESTIMONIAL</h2>
          <p className="text-lg text-red-500 mt-2 uppercase">
            Lorem ipsum dolor sit amet conse ctetur
          </p>

          {/* Profile & Review */}
          <div className="mt-6 flex items-center space-x-4">
            <img
              src="/images/user-profile.jpg"
              alt="Reviewer"
              className="w-14 h-14 rounded-full border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Junita Mushenko</h3>
              <div className="flex text-red-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="mt-4 italic text-gray-700 font-semibold">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            qused do eiusmod Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, qused do eiusmod Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
          </p>

          {/* Progress Indicator */}
          <div className="mt-6 flex space-x-2">
            <div className="h-1 w-10 bg-orange-400"></div>
            <div className="h-1 w-10 bg-gray-300"></div>
            <div className="h-1 w-10 bg-gray-300"></div>
            <div className="h-1 w-10 bg-gray-300"></div>
          </div>
        </div>

        {/* Right Side: Images Grid */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-2 gap-4 border border-gray-400 p-4">
          <img src="/person1.jpeg" alt="Person 1" className="w-full h-auto rounded-md"/>
          <img src="/person2.jpeg" alt="Person 2" className="w-full h-auto rounded-md"/>
          <img src="/person2.jpeg" alt="Person 3" className="w-full h-auto rounded-md"/>
          <img src="/person1.jpeg" alt="Person 4" className="w-full h-auto rounded-md"/>
        </div>

      </div>
    </section>
  );
}
