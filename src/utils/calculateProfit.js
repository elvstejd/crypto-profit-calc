import Decimal from 'decimal.js';

export function calculateProfit(grossBalance, invested) {
    return new Decimal(grossBalance).minus(invested).toString();
}
