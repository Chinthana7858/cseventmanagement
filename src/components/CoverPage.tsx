import React from "react";

export default function CoverPage() {
  return (
    <section className="h-full w-full bg-gradient-to-br from-black via-[#1b0e29] to-[#6c1b9e] text-white flex flex-col items-center justify-center px-4 text-center pt-[10vh]">
      <p className="text-xl text-gray-300 mb-2">Organized By</p>

      <h2 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text my-5">
        FINASTRA
      </h2>

      <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
        Reimagine Banking:
        <br />
        Adapt. Evolve. Thrive.
      </h1>

      <div className="text-sm sm:text-lg text-gray-400 space-y-2 mb-10">
        <p>Date: 9th April 2025</p>
        <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
        <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
      </div>

      <img
        src="https://i.imgur.com/Db8cTBV.jpg"
        alt="Event"
        className=" rounded-t-xl max-w-[90%] sm:max-w-3xl pt-2"
      />
    </section>
  );
}
