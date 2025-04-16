"use client";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-transparent text-white w-full px-6 py-6">
      <div className="flex justify-between items-center">
 
        <div className="h-[7vh] md:ml-[11vw]">
          <img
            src="https://i.imgur.com/Mdde36u.png"
            alt="Cogent Solutions Logo"
            className="h-full w-auto"
          />
        </div>

        <div className="hidden md:flex gap-8 items-center text-gray-500">
          <a href="#event-overview" className="hover:text-white">
            Event Overview
          </a>
          <a href="#agenda" className="hover:text-white">
            Agenda
          </a>
        </div>
        <a href="#register-now">
          <button className=" border border-white text-gray-300 font-semibold rounded-full px-4 py-3 hover:bg-black hover:text-red-800 transition mr-[10vw] scale-0 md:scale-100 cursor-pointer">
            Register Now
          </button>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" cursor-pointer"
          >
            {<HiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-300">
          <a href="#event-overview" className="hover:text-white">
            Event Overview
          </a>
          <a href="#agenda" className="hover:text-white">
            Agenda
          </a>
          <div className="flex justify-start">
          <a href="#register-now">
            <button className="border border-white text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-black hover:text-red-800 transition cursor-pointer">
              Register Now
            </button>
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
