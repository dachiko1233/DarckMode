import { useState } from "react";

export function Hero({ dark }) {
  return (
    <section
      className={`flex flex-col justify-center items-center  gap-10 px-8 pt-24 transition ${
        dark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Day & Night site
          </h1>
          <p className="text-lg mb-6">
            This shows you how to relax mentally and live with balance.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Start Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          {dark ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
              alt="Hero Illustration Night"
              className="w-64 md:w-96 drop-shadow-lg"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/5570/5570589.png"
              alt="Hero Illustration Day"
              className="w-64 md:w-96 drop-shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
