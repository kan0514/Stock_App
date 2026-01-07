export function calculateInvestment(price: number, qty: number) {
  return price * qty;
}

export function calculatePresentValue(cmp: number, qty: number) {
  return cmp * qty;
}

export function calculateGainLoss(present: number, investment: number) {
  return present - investment;
}

export function calculateGainLossPercent(gainLoss: number, investment: number) {
  return (gainLoss / investment) * 100;
}
