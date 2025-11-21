import React from "react";
import { Leaf } from "lucide-react";

const More = () => {
  return (
    <div className="bg-[#0a1f0f] min-h-screen text-gray-200 pt-24 px-4 sm:px-6 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        <div className="shrink-0">
          <Leaf className="w-16 h-16 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About FloraVision
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            FloraVision is a modern platform dedicated to bringing the beauty of
            nature closer to you. Our mission is to provide a curated collection
            of plants, gardening tips, and eco-friendly solutions to enhance your
            living spaces and improve the air you breathe.  
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          At FloraVision, we aim to inspire people to connect with nature by
          providing access to trendy and top-quality plants. We focus on
          sustainable practices and community engagement to promote a healthier
          and greener lifestyle.
        </p>
      </div>

      {/* Our Vision */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Our Vision
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          We envision a world where urban spaces are filled with greenery, air
          quality is improved, and everyone can enjoy the mental and physical
          benefits of plants. FloraVision is committed to making that vision a
          reality by offering a seamless plant shopping experience.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#0f2a16] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto bg-emerald-400 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
              A
            </div>
            <h3 className="text-xl font-semibold text-white">Adnan</h3>
            <p className="text-gray-300 mt-1">Founder & Developer</p>
          </div>
          <div className="bg-[#0f2a16] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto bg-emerald-400 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
              S
            </div>
            <h3 className="text-xl font-semibold text-white">Sara</h3>
            <p className="text-gray-300 mt-1">Marketing Lead</p>
          </div>
          <div className="bg-[#0f2a16] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto bg-emerald-400 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
              R
            </div>
            <h3 className="text-xl font-semibold text-white">Rohit</h3>
            <p className="text-gray-300 mt-1">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
