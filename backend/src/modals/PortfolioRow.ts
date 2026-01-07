import { DerivedMetrics } from "./DerivedMetrics"
import { FinancialMetrics } from "./FinancialMetrics"
import { MarketSnapshot } from "./MarketSnapshot"
import { StockHolding } from "./StockHolding"

export interface PortfolioRow {
  holding: StockHolding
  market: MarketSnapshot
  financials: FinancialMetrics
  derived: DerivedMetrics
}
