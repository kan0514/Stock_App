📊 Stock Portfolio Dashboard (Full Stack)

A full-stack stock portfolio dashboard with real-time data updates every 15 seconds, built using Next.js, Node.js, Express, and TypeScript.

🛠 Tech Stack

Frontend

Next.js

TypeScript

Tailwind CSS

Backend

Node.js

Express

TypeScript

Yahoo Finance & Google Finance (data source)

In-memory caching

⚡ Features

Live stock data (CMP, P/E, Market Cap)

Auto refresh every 15 seconds

Profit / Loss calculations

Backend-driven data (no frontend scraping)

Clean, responsive UI

📂 Project Structure
frontend/   # Next.js + Tailwind UI
backend/    # Node.js + Express APIs

▶️ How to Run
Backend
cd backend
npm install
npm run dev


Runs on: http://localhost:4000

Frontend
cd frontend
npm install
npm run dev


Runs on: http://localhost:3000

🔄 Data Flow

Frontend → Backend API → External Finance Sources
Backend caches data → Frontend auto-refreshes every 15s

👨‍💻 Author

Kanishk Sugandhi

✅ Status

✔ Frontend working
✔ Backend working
✔ Live updates enabled