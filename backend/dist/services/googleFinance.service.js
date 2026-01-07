"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFundamentals = getFundamentals;
async function getFundamentals(symbol) {
    return {
        peTTM: Number((10 + Math.random() * 20).toFixed(2)),
        marketCap: Math.round(100000 + Math.random() * 500000),
        latestEarnings: "Q4 FY24",
    };
}
