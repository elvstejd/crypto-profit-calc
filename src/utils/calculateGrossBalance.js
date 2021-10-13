import Decimal from "decimal.js";

export function calculateGrossBalance(amount, targetPrice) {
    return new Decimal(amount).times(targetPrice);
}
