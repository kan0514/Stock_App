export interface StockHolding {
  symbol: string
  exchange: "NSE" | "BSE"
  purchasePrice: number
  quantity: number
  sector: string
}
