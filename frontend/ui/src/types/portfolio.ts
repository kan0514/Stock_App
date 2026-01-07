export interface PortfolioRow {
  symbol: string;
  exchange: "NSE" | "BSE";
  purchasePrice: number;
  quantity: number;
  sector: string;

  cmp: number;
  peTTM: number | null;
  marketCap: number | null;
  latestEarnings: string | null;

  investment: number;
  presentValue: number;
  gainLoss: number;
  gainLossPercent: number;
  portfolioPercent: number;
}
