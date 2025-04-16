import { agendaData } from "@/data/agenda";
import AgendaItem from "@/Templates/AgendaItem";
import React from "react";

export default function Agenda() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8" id="agenda">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        <h2 className="text-4xl sm:text-5xl text-left font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-12 basis-1/4 pr-[1vw]">
          Agenda
        </h2>

        <div className="space-y-6 basis-3/4 bg-[#fcf8ff] p-5">
          {agendaData.map((item, index) => (
            <AgendaItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
