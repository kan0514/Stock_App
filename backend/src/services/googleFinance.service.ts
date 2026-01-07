export async function getFundamentals(symbol: string) {
  return {
    peTTM: Number((10 + Math.random() * 20).toFixed(2)),
    marketCap: Math.round(100000 + Math.random() * 500000),
    latestEarnings: "Q4 FY24",
  };
}
