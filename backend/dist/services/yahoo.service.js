"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCMP = getCMP;
const cache_1 = require("../utils/cache");
const TTL = 15000; // 15 seconds
async function getCMP(symbol) {
    const cached = (0, cache_1.getCache)(`cmp:${symbol}`);
    if (cached)
        return cached;
    // MOCKED VALUE (replace with yahoo-finance2 or scraping later)
    const cmp = Math.round(1000 + Math.random() * 1000);
    (0, cache_1.setCache)(`cmp:${symbol}`, cmp, TTL);
    return cmp;
}
