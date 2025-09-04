import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    alert("✅ Your message has been sent!");
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-16 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-500 to-pink-600 text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
        <p className="text-orange-100 mb-6">
          Have questions or need help? We’d love to hear from you.
        </p>
        <div className="space-y-3 text-lg">
          <p>📍 Siwan, Bihar, India</p>
          <p>📞 +91 7004427754</p>
          <p>✉️ altamashraza3.ar@gmail.com</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full text-gray-700 mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-gray-700 mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full text-gray-700  mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
