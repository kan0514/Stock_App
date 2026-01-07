import { getCache, setCache } from "../utils/cache";

const TTL = 15000; // 15 seconds

export async function getCMP(symbol: string): Promise<number> {
  const cached = getCache<number>(`cmp:${symbol}`);
  if (cached) return cached;

  // MOCKED VALUE (replace with yahoo-finance2 or scraping later)
  const cmp = Math.round(1000 + Math.random() * 1000);

  setCache(`cmp:${symbol}`, cmp, TTL);
  return cmp;
}
