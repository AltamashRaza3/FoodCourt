const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-600 to-indigo-700 text-white p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-blue-100 mb-6">
          Have questions or need help? Get in touch with us.
        </p>
        <div className="space-y-3">
          <p>📍 Siwan, Bihar, India</p>
          <p>📞 +91 7004427754</p>
          <p>✉️ altamashraza3.ar@gmail.com</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
