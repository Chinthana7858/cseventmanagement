"use client";
import React, { useState } from "react";
import SpeakerCard from "../Templates/SpeakerCard";
import { speakersdata, speakersdataLast } from "../data/speakers";
import SpeakerModal from "../Templates/SpeakerModal";

export default function OurSpeakers() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSpeakerId, setSelectedSpeakerId] = useState<number | null>(null);
  
    const allSpeakers = [...speakersdata, ...speakersdataLast];
    const selectedSpeaker = allSpeakers.find((s) => s.id === selectedSpeakerId);
  
    const handleOpenModal = (id: number) => {
      setSelectedSpeakerId(id);
      setModalOpen(true);
    };
    return (
        <section className="bg-gradient-to-br from-[#040404] via-[#2c2c2c] to-[#2c2c2c] py-16 px-6 sm:px-20 text-white mx-2">
          <h2 className="text-5xl font-light text-center mb-12">Our Speakers</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-8 text-center">
            {speakersdata.map((s) => (
              <div key={s.id} onClick={() => handleOpenModal(s.id)}>
                <SpeakerCard {...s} />
              </div>
            ))}
          </div>
    
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mt-10">
            {speakersdataLast.map((s) => (
              <div
                className="w-full sm:w-1/2 md:w-1/4 flex justify-center cursor-pointer"
                key={s.id}
                onClick={() => handleOpenModal(s.id)}
              >
                <SpeakerCard {...s} />
              </div>
            ))}
          </div>
    
          {selectedSpeaker && (
            <SpeakerModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              speaker={selectedSpeaker}
              
            />
          )}
        </section>
      );
    }
