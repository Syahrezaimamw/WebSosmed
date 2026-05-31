import React from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-28 px-6 md:px-16 overflow-hidden">

      {/* SUBTLE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 text-lg mb-3">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            Connecting Global Talent
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
            Connect the  <br />
            <span className="text-blue-200">World</span>
          </h1>

          {/* DESC */}
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-blue-100 max-w-xl mb-10">
            Bridge the gap between vision and execution. Join a global network of verified professionals and unlock opportunities that transcend borders.
          </p>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="relative w-[420px] h-[500px]">

            {/* MAIN IMAGE */}
            <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={hero2}
                className="w-full h-full object-cover"
              />
            </div>

            {/* SECOND IMAGE */}
            <div className="absolute -bottom-12 left-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-xl border border-white/20">
              <img
                src={hero1}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
