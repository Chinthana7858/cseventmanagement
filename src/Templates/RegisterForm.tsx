"use client";
import axios from "axios";
import React, { useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({ email: "", mobile: "", agreed: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10,15}$/;

    let valid = true;
    const newErrors = { email: "", mobile: "", agreed: "" };

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!mobileRegex.test(mobile)) {
      newErrors.mobile = "Invalid mobile number (10–15 digits)";
      valid = false;
    }
    if (!agreed) {
      newErrors.agreed = "You must agree to the Privacy Policy";
      valid = false;
    }

    

    setErrors(newErrors);

    if (valid) {
      try {
        const payload = {
          firstName: firstName,
          lastName: lastName,
          jobTitle: jobTitle,
          company: company,
          mobileNumber: mobile,
          email: email,
          website: website,
        };

        const response = await axios.post(
          "https://cssolutionsformbackend-production.up.railway.app/register",
          payload
        );

        if (response.status === 200) {
          alert("Registration successful!");
          setFirstName("");
          setLastName("");
          setJobTitle("");
          setCompany("");
          setWebsite("");
          setEmail("");
          setMobile("");
          setAgreed(false);
          setErrors({ email: "", mobile: "", agreed: "" });
        } else {
          alert("Something went wrong. Try again.");
        }
      } catch (error) {
        console.error("API Error:", error);
        alert("Server error. Please try later.");
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1d1d1d] via-[#2e2e2e] to-[#414040] p-8 rounded-xl shadow-xl w-full md:w-[40vw]">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className={inputStyle}
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={inputStyle}
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Title"
          className={inputStyle}
          value={jobTitle}
          required
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          className={inputStyle}
          value={company}
          required
          onChange={(e) => setCompany(e.target.value)}
        />

        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            className={inputStyle}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && (
            <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <input
          type="text"
          placeholder="Company Website URL"
          className={inputStyle}
          value={website}
          required
          onChange={(e) => setWebsite(e.target.value)}
        />

        <div className="text-sm text-gray-300 mt-4 flex gap-2 items-start">
          <input
            type="checkbox"
            className="mt-1"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p>
            By filling out the registration form to attend our event, you agree
            and consent to{" "}
            <a
              href="https://cogentsolutions.ae/privacy-policy"
              className="text-pink-400 underline"
            >
              Cogent Solutions Privacy Policy
            </a>
          </p>
        </div>
        {errors.agreed && (
          <p className="text-red-400 text-sm mt-1">{errors.agreed}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-pink-500 hover:bg-pink-600 rounded text-white font-semibold mt-4 cursor-pointer hover:shadow-pink-400"
        >
          Register
        </button>
      </form>
    </div>
  );
}

const inputStyle =
  "w-full px-4 py-3 bg-[#434343] text-gray-100 rounded border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400";
