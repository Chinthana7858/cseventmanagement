import RegisterForm from "@/Templates/RegisterForm";
import React from "react";

export default function RegisterSection() {
  return (
    <section
      className="bg-gradient-to-br from-[#c33ea3] via-[#934ac3] to-[#5f4bd2] py-20 px-6 text-white"
      id="register-now"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md basis-1/2">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">Register Now</h2>
          <p className="text-lg font-semibold">
            Join us for an unforgettable experience!
          </p>
        </div>

        <div className="basis-1/2">
          {" "}
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
