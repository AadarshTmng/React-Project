

// import React from 'react'

// export default function BookDetails() {
//   return (
//     <div>BookDetails</div>
//   )
// }
import React from 'react';

const BookDetails = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-6">
      <div className="w-full max-w-[1024px] h-[600px] flex  overflow-hidden">
        {/* Left Section - Blue Background with Book Image */}
        <div className="w-1/3 bg-[#0259B6] p-12 flex items-center shadow-xl justify-center">
          {/* Your actual book image would go here */}
          <img
            src="/book1.png"
            alt="Book cover"
            className="w-[300px] h-[400px] object-cover transition-all duration-300 hover:brightness-105 hover:shadow-lg active:scale-95 hover:translate-y-[-2px]"
          />
        </div>

        {/* Right Section - White Background with Details */}
        <div className="w-1/2 bg-white p-12 shadow-xl ">
          {/* Title and Author */}
          <div className="mb-8 ">
            <h1 className="text-[32px] font-semibold text-black mb-2">
              Mastering Laravel
            </h1>
            <p className="text-gray-600 text-lg">by Aadarsh Tamang</p>
          </div>

          {/* Edition Badge */}
          <div className="mb-8">
            <span className="bg-[#F0F2F5] text-gray-600 px-6 py-2 rounded-full text-sm">
              2nd Edition
            </span>
          </div>

          {/* Publisher */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Publisher</label>
            <p className="text-black text-lg">College of Applied Business & Technology</p>
          </div>

          {/* Rack Number */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Rack Number</label>
            <p className="text-black text-lg">B-203</p>
          </div>

          {/* Location Box */}
          <div className="bg-[#F0F2F5] p-4 rounded-xl mb-8">
            <p className="text-gray-700">
              You can find this book in Section B, Rack B-203
            </p>
          </div>

          {/* Accession Number Input and Add Button */}
          <div className="flex gap-4 ">
            <input 
              placeholder="Accession number"
              className="flex-1 h-12 px-4 outline-none rounded-xl bg-[#F0F2F5] border-0 text-gray-700"
            />
            <button className="h-12 px-8 bg-[#0259B6] hover:bg-blue-700 rounded-xl text-white transform transition-all duration-150 hover:bg-[#0247A5] hover:shadow-lg active:scale-95 hover:translate-y-[-1.5px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;