import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white backdrop-blur border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT - BRAND */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            C
          </div>

          <div>
            <h1 className="text-blue-600 font-semibold text-lg leading-none">
              LinkedIn
            </h1>
            <p className="text-xs text-gray-400">
              Connect & Share
            </p>
          </div>
        </div>

      

        {/* RIGHT - ACTION */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-blue-600">
            Login
          </button>

          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}