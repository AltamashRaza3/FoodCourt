🍽️ FoodCourt – React Restaurant Listing App

FoodCourt is a React + Tailwind CSS application that fetches restaurant data from Swiggy’s API and displays it in a responsive grid.
It includes search and filter functionalities, a shimmer loading effect, and mobile-friendly navigation.


---

🚀 Features

📡 Real API Integration – Fetches live restaurant data from Swiggy API.

🔍 Search Restaurants – Search by restaurant name.

⭐ Filter Top Rated Restaurants – Show only restaurants with a rating above 4.3.

⚡ Shimmer UI – Beautiful loading skeleton for better UX.

📱 Responsive Design – Works on all devices (1–4 column layouts).

🎨 Tailwind CSS Styling – Clean and modern UI with hover effects.

🛠️ Tech Stack

React 19 – Component-based UI

Vite – Fast bundler & dev server

Tailwind CSS 4 – Utility-first styling

Swiggy API – Live restaurant data



---

📂 Folder Structure

FoodCourt/
│── public/               # Static files
│── src/
│   ├── components/        # React components (Header, Body, RestrauntCard, Shimmer)
│   ├── utils/             # Mock data or helpers
│   ├── assets/            # Images & logos
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


---

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/yourusername/FoodCourt.git
cd FoodCourt

2️⃣ Install dependencies

npm install

3️⃣ Run the development server

npm run dev

Vite will start a local dev server (default: http://localhost:5173).

---

🔧 Environment Notes

This app uses a public Swiggy API endpoint that may require CORS handling in some setups.

If API fails, you can switch to MockData.jsx for offline testing.



---

📌 API Used

Swiggy Restaurant API

https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&collection=83639&tags=layout_CCS_Biryani


---

✨ Future Improvements

🛒 Add Cart & Ordering functionality

🗂️ Pagination & Infinite Scroll

🎯 Category-based filters

🔄 Real-time search without button click



---

📜 License

This project is licensed under the MIT License – free to use and modify.
