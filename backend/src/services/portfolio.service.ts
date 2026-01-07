import fs from "fs";
import path from "path";
import { StockHolding } from "../modals/StockHolding";
import { getCMP } from "./yahoo.service";
import { getFundamentals } from "./googleFinance.service";
import {
  calculateInvestment,
  calculatePresentValue,
  calculateGainLoss,
  calculateGainLossPercent,
} from "../utils/calculations";

const portfolioPath = path.join(__dirname, "../data/portfolio.json");

export async function getPortfolio() {
  const holdings: StockHolding[] = JSON.parse(
    fs.readFileSync(portfolioPath, "utf-8")
  );

  const totalInvestment = holdings.reduce(
    (sum, h) => sum + calculateInvestment(h.purchasePrice, h.quantity),
    0
  );

  const result = await Promise.all(
    holdings.map(async (holding) => {
      const cmp = await getCMP(holding.symbol);
      const fundamentals = await getFundamentals(holding.symbol);

      const investment = calculateInvestment(
        holding.purchasePrice,
        holding.quantity
      );

      const presentValue = calculatePresentValue(cmp, holding.quantity);
      const gainLoss = calculateGainLoss(presentValue, investment);

      return {
        ...holding,
        cmp,
        ...fundamentals,
        investment,
        presentValue,
        gainLoss,
        gainLossPercent: calculateGainLossPercent(gainLoss, investment),
        portfolioPercent: (investment / totalInvestment) * 100,
      };
    })
  );

  return result;
}
