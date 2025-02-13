import React from "react";

const ContactForm = () => {
  return (
    <section 
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between p-10" 
      style={{ backgroundImage: "url('/images.jpg')" }}
    >
      {/* Left-Aligned Small Form */}
      <div className="bg-white p-6 opacity-80 shadow-md w-full md:w-1/3 border border-gray-500 ml-10 relative z-10">
        <h2 className="text-lg font-bold text-red-500 mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Name" className="border p-2 w-full" />
            <input type="text" placeholder="Phone Number" className="border p-2 w-full" />
            <input type="text" placeholder="Flavours" className="border p-2 w-full" />
            <input type="text" placeholder="Your Address" className="border p-2 w-full" />
          </div>
          <textarea placeholder="Message" className="border p-2 w-full h-20"></textarea>
          <button className="bg-black text-white px-5 py-2">VIEW MORE</button>
        </form>
      </div>

      {/* Transparent Red Overlay Section */}
      <div className="absolute opacity-50 bottom-0 left-0 w-full bg-red-500 bg-opacity-20 text-white text-center py-10 px-4">
        <p className="max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-4 flex justify-center">
          <input type="text" className="border p-2 w-1/4 text-black bg-white bg-opacity-80" />
          <button className="bg-black text-white px-6 py-2 ml-2">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
