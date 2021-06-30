export function calculateProfit(invested, amount, targetPrice) {
    const futureHoldings = amount * targetPrice;
    const profit = futureHoldings - invested; 
    return parseValue(profit);
}

export function calculateAmount(invested, buyingPrice) {
    const amount = invested/buyingPrice; 
    return parseValue(amount);
}

export function calculatePercentage(profit, invested) {
    return (profit/invested)*100;
}

export function parseValue(v) {
    const value = parseFloat(v);
    if (isNaN(value)) return 0;
    if (!isFinite(value)) return 0;
    return value;
}

export function round (number) {
    return number.toFixed(2);
}