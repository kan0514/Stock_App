📊 Portfolio Dashboard – Frontend

A responsive stock portfolio dashboard built using Next.js, TypeScript, and Tailwind CSS.
The application displays real-time portfolio data with automatic updates every 15 seconds, consuming data securely from a backend API.

🚀 Tech Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: React Hooks

Data Fetching: Fetch API with polling

Deployment Ready: Vercel / Netlify

✨ Features

📈 Live portfolio data auto-refresh (every 15 seconds)

🟢 Profit / 🔴 Loss color indicators

💰 Real-time calculations:

Investment value

Current value

Gain / Loss

Gain / Loss percentage

📱 Fully responsive layout

⚡ Optimized re-renders

🔐 No direct external API exposure (backend driven)

🧩 Data Displayed

Each stock entry includes:

Stock Symbol

Purchase Price

Quantity

CMP (Current Market Price)

Investment Value

Present Value

Gain / Loss

Gain / Loss Percentage

P/E Ratio

🔄 Auto Refresh Logic

Portfolio data is fetched from the backend every 15 seconds

Ensures near real-time price updates

Backend caching prevents unnecessary external API calls

📂 Project Structure
src/
 ├── app/
 │   └── page.tsx          # Main dashboard page
 ├── components/
 │   ├── PortfolioTable.tsx
 │   └── Loader.tsx
 ├── services/
 │   └── portfolio.api.ts  # Backend API calls
 ├── types/
 │   └── portfolio.ts
 └── styles/
     └── globals.css

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/portfolio-frontend.git
cd portfolio-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env.local file:

NEXT_PUBLIC_API_BASE_URL=http://localhost:4000


⚠️ The frontend communicates only with the backend API.

4️⃣ Run the Development Server
npm run dev


Open:
👉 http://localhost:3000

🧪 Backend Dependency

This frontend requires the backend service to be running.

Backend Responsibilities:

Fetch CMP from Yahoo Finance

Fetch P/E Ratio & Earnings from Google Finance

Cache responses (15 sec)

Expose a secure REST API

🎨 UI/UX Highlights

Clean, minimal dashboard layout

Color-coded profit and loss

Mobile-friendly table rendering

Smooth updates without flicker

🔒 Security Considerations

No API keys or scraping logic in frontend

Environment-based backend URLs

No exposure of external financial sources

📌 Future Enhancements (Optional)

📊 Charts for portfolio performance

🏷 Sector-wise grouping

🔍 Search & filters

🔔 WebSocket-based real-time updates

🧑‍💻 Author

Kanishk Sugandhi
Full-Stack Developer (MERN / Next.js)

✅ Status

✔ Frontend complete
✔ Live updates working
✔ Production-ready