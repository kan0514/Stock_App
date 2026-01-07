"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateInvestment = calculateInvestment;
exports.calculatePresentValue = calculatePresentValue;
exports.calculateGainLoss = calculateGainLoss;
exports.calculateGainLossPercent = calculateGainLossPercent;
function calculateInvestment(price, qty) {
    return price * qty;
}
function calculatePresentValue(cmp, qty) {
    return cmp * qty;
}
function calculateGainLoss(present, investment) {
    return present - investment;
}
function calculateGainLossPercent(gainLoss, investment) {
    return (gainLoss / investment) * 100;
}
