import {
    FaLightbulb,
    FaChartLine,
    FaUsers,
    FaGraduationCap,
    FaComments,
  } from "react-icons/fa";
  
  export default function ReasonsToAttend() {
    return (
      <section className="bg-gradient-to-br from-[#270b66] via-[#542896] to-[#7740bc]  rounded-[40px] p-6 sm:p-12 flex flex-col sm:flex-row items-center gap-8 text-[#f1e9fd] max-w-[1200px] mx-auto mt-12 ">
        
   
        <div className="w-full sm:w-1/2">
          <img
            src="https://i.imgur.com/nsCosmc.jpg"
            alt="Conference Visual"
            className="rounded-[30px] w-full object-cover"
          />
        </div>
  
 
        <div className="w-full sm:w-1/2 space-y-6">
          <h2 className="text-xl sm:text-2xl font-light leading-snug px-10 sm:px-0">
            TOP REASONS WHY THIS IS THE ONLY <br />
            CONFERENCE YOU NEED TO ATTEND IN 2025
          </h2>
  
          <ul className="space-y-4 text-sm sm:text-lg font-light">
            <li className="flex items-center gap-3">
              <FaLightbulb size={25} className="text-[#e3d6f6]" /> Learn from industry experts
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine size={25}  className="text-[#e3d6f6]" /> Stay ahead of emerging trends
            </li>
            <li className="flex items-center gap-3">
              <FaUsers size={25}  className="text-[#e3d6f6]" /> Connect with fellow banking professionals
            </li>
            <li className="flex items-center gap-3">
              <FaGraduationCap size={25}  className="text-[#e3d6f6]" /> Enhance your knowledge, skills, and network
            </li>
            <li className="flex items-center gap-3">
              <FaComments size={25}  className="text-[#e3d6f6]" /> Share your expertise and experience with peers
            </li>
          </ul>
        </div>
      </section>
    );
  }
  