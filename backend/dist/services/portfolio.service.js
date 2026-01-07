"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolio = getPortfolio;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yahoo_service_1 = require("./yahoo.service");
const googleFinance_service_1 = require("./googleFinance.service");
const calculations_1 = require("../utils/calculations");
const portfolioPath = path_1.default.join(__dirname, "../data/portfolio.json");
async function getPortfolio() {
    const holdings = JSON.parse(fs_1.default.readFileSync(portfolioPath, "utf-8"));
    const totalInvestment = holdings.reduce((sum, h) => sum + (0, calculations_1.calculateInvestment)(h.purchasePrice, h.quantity), 0);
    const result = await Promise.all(holdings.map(async (holding) => {
        const cmp = await (0, yahoo_service_1.getCMP)(holding.symbol);
        const fundamentals = await (0, googleFinance_service_1.getFundamentals)(holding.symbol);
        const investment = (0, calculations_1.calculateInvestment)(holding.purchasePrice, holding.quantity);
        const presentValue = (0, calculations_1.calculatePresentValue)(cmp, holding.quantity);
        const gainLoss = (0, calculations_1.calculateGainLoss)(presentValue, investment);
        return {
            ...holding,
            cmp,
            ...fundamentals,
            investment,
            presentValue,
            gainLoss,
            gainLossPercent: (0, calculations_1.calculateGainLossPercent)(gainLoss, investment),
            portfolioPercent: (investment / totalInvestment) * 100,
        };
    }));
    return result;
}
