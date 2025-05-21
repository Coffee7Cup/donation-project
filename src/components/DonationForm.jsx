import React, { useState } from "react";

const donationOptions = [
  "Books",
  "Clothes",
  "Food",
  "Money",
  "Toys",
  "Gadgets",
  "Other",
];

const occasionOptions = [
  "Birthday",
  "Anniversary",
  "Festival",
  "In Memory",
  "General",
  "Other",
];

function DonationForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    donation: donationOptions[0],
    address: "",
    occasion: occasionOptions[0],
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your donation!");
    setForm({
      name: "",
      contact: "",
      donation: donationOptions[0],
      address: "",
      occasion: occasionOptions[0],
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-xl p-20 md:mt-[-200px]">
      <div className="w-full bg-white shadow rounded-lg md:p-15">
        <h2 className="text-2xl font-bold mb-6 text-center">Donation Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            {/* Left column */}
            <div className="flex-1 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Contact Details */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Details
                </label>
                <input
                  placeholder="Phone or Email"
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Donation Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  What do you want to donate?
                </label>
                <select
                  name="donation"
                  value={form.donation}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {donationOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Right column */}
            <div className="flex-1 space-y-6">
              {/* Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Address
                </label>
                <input
                  placeholder="Enter your address"
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Occasion */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Occasion
                </label>
                <select
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {occasionOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write a message (optional)"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
          <div
            type="submit"
            className="w-full  text-white py-2 rounded  transition flex items-center justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-400 p-3 px-8 rounded-4xl transition transition-all duration-200">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
