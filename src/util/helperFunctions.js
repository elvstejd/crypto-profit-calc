import Big from 'big.js';

export function calculateAmount(invested, buyingPrice) {
    // validate input
    if (
        invested == 0 ||
        buyingPrice == 0 ||
        !isValid(invested) ||
        !isValid(buyingPrice)
    ) return 0;
    const bigInvested = new Big(invested);
    const bigBuyingPrice = new Big(buyingPrice);
    const amount = bigInvested.div(bigBuyingPrice);
    return amount;
}

export function calculateProfit(grossBalance, invested) {
    return grossBalance - invested;
}

export function calculatePercentage(profit, invested) {
    if (
        invested == 0 ||
        !isValid(invested) ||
        !isValid(profit)
    ) return 0;

    const bigProfit = new Big(profit);
    const bigInvested = new Big(invested);


    return bigProfit.div(bigInvested).times(100).toFixed(2);
}

export function parseValue(number) {
    if (!number) return null;
    try {
        const value = new Big(number);
        return value;
    } catch (error) {
        return null;
    }
}

export function calculateGrossBalance(amount, targetPrice) {
    return amount * targetPrice;
}

function isValid(number) {
    if (
        isNaN(number) ||
        number === null ||
        number === undefined
    ) {
        return false;
    }

    return true;
}
