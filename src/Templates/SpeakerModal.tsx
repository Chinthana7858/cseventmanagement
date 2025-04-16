import React from "react";
import Image from 'next/image';

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: {
    id: number;
    name: string;
    title: string;
    org: string;
    image: string;
    bio?: string[];
  };
}

export default function SpeakerModal({
  isOpen,
  onClose,
  speaker,
}: SpeakerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
 
        <div className="flex justify-between items-center border-b pb-2 mb-4 text-gray-800 border-gray-200">
          <h2 className="text-xl font-semibold p-2">Speaker</h2>
          <button
            onClick={onClose}
            className="text-2xl font-light text-gray-700 hover:text-black"
          >
            &times;
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col md:flex-row gap-6">
            <Image 
              src={speaker.image}
              alt={speaker.name}
              className="w-full md:w-48 md:h-48 h-auto object-cover rounded-md"
            />

            <div className="text-gray-800">
              <h3 className="sm:text-3xl font-semibold text-xl">
                {speaker.name}
              </h3>
              <p className="font-medium mt-1">{speaker.title}</p>
              <p className="font-medium text-gray-700">{speaker.org}</p>
              {speaker.bio && Array.isArray(speaker.bio) && (
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-justify text-gray-800">
                  <span className="font-bold block">Bio:</span>
                  {speaker.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 border-t-1 border-gray-200 py-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
