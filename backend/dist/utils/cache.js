"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = setCache;
exports.getCache = getCache;
const cache = new Map();
function setCache(key, value, ttlMs) {
    cache.set(key, {
        value,
        expiry: Date.now() + ttlMs,
    });
}
function getCache(key) {
    const entry = cache.get(key);
    if (!entry)
        return null;
    if (Date.now() > entry.expiry) {
        cache.delete(key);
        return null;
    }
    return entry.value;
}
