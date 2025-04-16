import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className=" basis-2/5">
          <h2 className="text-2xl font-bold mb-4">Cogent Solutions™</h2>
          <p className="text-gray-300 pr-10 text-lg">
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the fortune 500 companies.
          </p>

          <h3 className="mt-8 font-bold text-lg">Awards</h3>
          <div className="flex gap-4 mt-4 flex-wrap">
            <img src="https://i.imgur.com/OIq3ntT.png" className="h-24" />
            <img src="https://i.imgur.com/W50sCSf.png" className="h-24" />
            <img src="https://i.imgur.com/DuIRiAg.png" className="h-24" />
            <img src="https://i.imgur.com/6RTTsZs.png" className="h-24" />
          </div>
        </div>


        <div className=" basis-2/5">
          <h3 className="text-2xl font-bold mb-4">Our office</h3>
          <ul className="text-gray-400 space-y-3 text-md hover:text-white">
            <li className=" flex">
              <span className="inline-block mr-2">
                {" "}
                <IoLocationOutline size={20} />
              </span>
              Middle East & Africa HQ
              <br />
              Office No: 209, The Metropolis Tower
              <br />
              Business Bay, Dubai, United Arab Emirates
            </li>
            <li className=" flex">
              <span className="inline-block mr-2">
                {" "}
                <IoLocationOutline size={20} />
              </span>
              Asia Pacific HQ
              <br />
              7th floor Green Lanka Tower, Colombo, Sri Lanka
            </li>
            <li className=" flex">
              <span className="inline-block mr-2">
                {" "}
                <IoLocationOutline size={20} />
              </span>
              Saudi Arabia HQ
              <br />
              Riyadh, Saudi Arabia
            </li>
            <li>
              <span className="inline-block mr-2">
                <LuPhoneCall size={20} />
              </span>
              +971 50 5718867
            </li>
            <li>
              <span className="inline-block mr-2">
                <MdOutlineEmail size={20} />
              </span>
              partnerships@cogentsolutions.ae
            </li>
          </ul>
        </div>
        <div className=" basis-1/5"></div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-md text-gray-400">
          © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/cogent-solutions-event-management/"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#0078ee]"
          >
            <FaLinkedinIn className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com/cseventsuae/"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#0078ee]"
          >
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.instagram.com/cs_event_management/"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#0078ee]"
          >
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="http://x.com/cseventsdxb"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#0078ee]"
          >
            <FaTwitter className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
