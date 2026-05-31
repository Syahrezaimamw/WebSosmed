import React from "react";

export default function Modal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      
      {/* MODAL */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-fadeIn">

        {/* HEADER */}
        <div className="p-5 border-b flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-blue-700 font-semibold">
              {user.name.charAt(0)}
            </span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto text-sm">

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Contact</h3>
            <div className="space-y-1 text-gray-600">
              <p>📧 {user.email}</p>
              <p>📞 {user.phone}</p>
              <p>🌐 {user.website}</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <div className="text-gray-600 space-y-1">
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
              <p className="text-xs text-gray-400">
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
            <div className="text-gray-600 space-y-1">
              <p className="font-medium">{user.company.name}</p>
              <p className="italic text-gray-500">
                "{user.company.catchPhrase}"
              </p>
              <p className="text-xs text-gray-400">
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}