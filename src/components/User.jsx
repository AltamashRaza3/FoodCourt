const User = () => {
  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Altamash Raza
      </h2>
      <h3 className="text-lg text-gray-600 mb-1">📍 Siwan, Bihar</h3>
      <h4 className="text-md text-blue-600 hover:underline cursor-pointer">
        <a
          href="https://linkedin.com/in/altamashraza3"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 linkedin.com/in/altamashraza3
        </a>
      </h4>
    </div>
  );
};

export default User;
