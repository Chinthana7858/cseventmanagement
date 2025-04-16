"use client";
import { motion } from "framer-motion";
import React from "react";

interface AgendaItemProps {
  time: string;
  title: string;
  speaker?: string;
  tag?: string;
}

export default function AgendaItem({
  time,
  title,
  speaker,
  tag,
}: AgendaItemProps) {

  return (
    <motion.div
      className="md:basis-1/4 w-full text-justify px-5"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="border-b border-pink-500 py-6">
        <div className="flex gap-6 items-start">
          <div className="w-32 font-semibold text-gray-800 basis-1/5 flex-col">
            <h3 className="font-medium text-xl text-gray-900"> {time}</h3>
            {tag && (
              <span className="inline-block mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded font-semibold">
                {tag}
              </span>
            )}
          </div>
          <div className=" basis-4/5">
            <div className=" font-medium text-xl text-gray-900">{title}</div>
            {speaker && <p className="text-md text-gray-700 mt-1">{speaker}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
