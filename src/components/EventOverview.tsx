"use client";
import React, { useEffect, useState } from "react";
import ReasonsToAttend from "./TopReasonstoAttend";
import { motion } from "framer-motion";

export default function EventOverview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[#181818] text-white py-16 px-6 sm:px-20  mx-auto"id="event-overview">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column - Title */}
        <div className="md:basis-1/4 w-full text-center">
          {mounted && (
            <motion.div
              className="md:basis-1/4 w-full text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-5xl font-extralight tracking-wide leading-snug">
                <span className="block">Event</span>
                <span className="block">Overview</span>
              </h2>
            </motion.div>
          )}
        </div>

        {/* Right Column - Paragraphs */}
        <div className="text-gray-200 space-y-6 text-md sm:text-xl leading-relaxed md:basis-3/4 text-justify">
          {mounted && (
            <motion.div
              className="md:basis-1/4 w-full text-justify"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p>
                Join us on April 9th in Cairo, Egypt, for Finastra's Universal
                Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This
                exclusive event is designed to help you navigate and excel in
                the rapidly evolving banking landscape.
              </p>
       
                {" "}
                <div className="h-2" />
     
              <p>
                Our forum will bring together business and technology experts,
                industry leaders, and visionaries to share their insights on the
                latest trends and challenges in the banking sector. You'll gain
                valuable knowledge on topics such as Generative AI, the impact
                of volatility, globalization challenges, persistent supply chain
                issues, recession threats, shifts in competitive dynamics, and
                evolving regulations.
              </p>
        
                {" "}
                <div className="h-2" />
        
              <p>
                Each session will delve into the implications, challenges, and
                opportunities these topics present, providing you with practical
                strategies to leverage the latest technologies and capitalize on
                emerging opportunities. This is a unique chance to learn from
                the best in the industry, stay ahead of the curve, and connect
                with fellow retail banking professionals.
              </p>
       
                {" "}
                <div className="h-2" />
       
              <p>
                Don't miss this opportunity to enhance your knowledge, skills,
                and network in the finance and banking sector. Register today
                and secure your place at this must-attend event!
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <div>
        {mounted && (
          <motion.div
            className="md:basis-1/4 w-full text-justify"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <ReasonsToAttend />
          </motion.div>
        )}
      </div>
    </section>
  );
}
