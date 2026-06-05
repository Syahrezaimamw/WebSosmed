import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start gap-4">

        {/* LEFT */}
        <div>
          <h2 className="text-blue-600 font-semibold text-lg">
            LinkedIn
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Connect & Share with the world
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-sm text-gray-500 flex flex-col md:items-end">
          <p>© 2026 </p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}