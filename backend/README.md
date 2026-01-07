📊 Portfolio Dashboard Backend
Overview

This backend service powers a dynamic portfolio dashboard that provides real-time and fundamental stock insights.
It is built using Node.js, Express, and TypeScript, following a clean layered architecture.

The service:

Reads portfolio holdings from a static JSON source (converted from Excel)

Fetches live market data (CMP) and fundamentals

Calculates portfolio performance metrics

Exposes a REST API for frontend consumption

Tech Stack

Node.js

Express.js

TypeScript

Axios (optional for live APIs)

In-memory caching

CORS & dotenv

Project Structure
src/
 ├─ index.ts                # App bootstrap
 ├─ routes/
 │   └─ dashboard.routes.ts # API routes
 ├─ services/
 │   ├─ portfolio.service.ts
 │   ├─ yahoo.service.ts
 │   └─ googleFinance.service.ts
 ├─ models/
 │   └─ *.ts                # Type definitions
 ├─ data/
 │   └─ portfolio.json      # Excel-converted holdings
 ├─ utils/
 │   ├─ cache.ts
 │   ├─ calculations.ts
 │   └─ errorHandler.ts

API Endpoints
Get Portfolio Dashboard Data
GET /api/v1/dashboard


Response:

Portfolio holdings

Live CMP

Investment & present value

Gain/Loss (absolute and %)

Portfolio weight

Fundamental metrics

Data Flow

Portfolio holdings are loaded from portfolio.json

Live CMP is fetched from Yahoo Finance (mocked / cached)

Fundamentals are fetched from Google Finance (mocked)

Financial metrics are calculated

Consolidated data is returned to the client

Calculations
Metric	Formula
Investment	Purchase Price × Quantity
Present Value	CMP × Quantity
Gain/Loss	Present Value − Investment
Gain/Loss (%)	(Gain/Loss ÷ Investment) × 100
Portfolio (%)	Investment ÷ Total Investment × 100
Caching Strategy

CMP cached for 15 seconds

Prevents excessive calls to unofficial APIs

Improves performance and reliability

Error Handling

External API failures are caught and logged

Partial data is returned instead of failing the request

API never crashes due to upstream issues

Why Backend Fetching?

Prevents exposing scraping logic to the client

Avoids CORS and rate-limit issues

Allows centralized caching and transformations

Limitations & Assumptions

Yahoo & Google Finance do not provide official public APIs

Current implementation uses mock data

Scraping logic can break if source HTML changes

Financial data accuracy depends on source availability

How to Run Locally
npm install
npm run dev


Server runs on:

http://localhost:4000

Future Improvements

Replace mocks with real scraping / libraries

Add Redis for distributed caching

Add WebSocket support for real-time updates

Add unit tests for services

Summary

This backend is designed to be:

Modular

Scalable

Explainable

Safe against API rate limits