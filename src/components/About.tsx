import React from "react";

export default function About() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 sm:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">About Finastra</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-200 font-light">
          Finastra is a global provider of financial services software
          applications across Lending, Payments, Treasury and Capital Markets,
          and Universal (retail and digital) Banking. Committed to unlocking the
          potential of people, businesses and communities everywhere, its vision
          is to accelerate the future of Open Finance through technology and
          collaboration, and its pioneering approach is why it is trusted by
          ~8,100 financial institutions, including 45 of the world's top 50
          banks.
        </p>

        <p className="text-lg sm:text-xl mt-10 text-gray-300">
          For more information, visit www.finastra.com.
        </p>
      </div>
    </section>
  );
}
