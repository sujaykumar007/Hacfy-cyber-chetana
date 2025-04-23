"use client";
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // frontend component
const handleSubmit = async () => {
    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
    };
  
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmedData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('✅ Registration successful! Check your email.');
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '' });
      } else {
        alert('❌ Error: ' + data.error);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Something went wrong!');
    }
  };
  
  return (
    <section
      id="pledge"
      className="w-full flex justify-center items-start px-4 pb-0 h-screen md:min-h-screen overflow-y-auto align-middle"
      style={{ alignItems: "center", marginTop: -100 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden w-full max-w-none mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-8 md:px-8 md:py-12">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
            style={{ color: "var(--primary-blue)" }}
          >
            Take the Cyber Safety Pledge
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mt-3"
            style={{ color: "var(--primary-blue)" }}
          >
            I, ____________, pledge to become a Cyber Awareness Ambassador with
            HacFy Cyber Chetana, dedicating myself to building a cyber-safe
            society by promoting digital awareness, empowering women and youth,
            and standing against all forms of cybercrimes. I commit to
            spreading ethical digital practices, safeguarding online privacy,
            and contributing to a secure digital future for our community and
            nation. Together, let's create a cyber-resilient Karnataka and
            inspire others to be responsible digital citizens.
          </p>
        </div>

        <div className="flex justify-center items-center p-6 md:p-8">
          <div className="p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] bg-white">
            <h2
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center"
              style={{ color: "var(--primary-blue)" }}
            >
              Join Now
            </h2>
            <div className="flex flex-col space-y-3 md:space-y-4">
              <input
                className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
                placeholder="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="p-3 md:p-4 text-black rounded-lg border focus:outline-none"
                placeholder="Phone Number"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <button
                className="text-white p-3 md:p-4 rounded-lg font-semibold transition"
                style={{ backgroundColor: "var(--primary-orange)" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
