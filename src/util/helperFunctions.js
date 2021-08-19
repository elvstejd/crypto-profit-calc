import Big from 'big.js';

export function calculateAmount(invested, buyingPrice) {
    // validate input
    if (
        invested == 0 ||
        buyingPrice === 0 ||
        !isValid(invested) ||
        !isValid(buyingPrice)
    ) return 0;
    const bigInvested = new Big(invested);
    const bigBuyingPrice = new Big(buyingPrice);
    const amount = bigInvested.div(bigBuyingPrice); 
    return amount;
}

export function calculateProfit(invested, amount, targetPrice) {
    if (
        invested == 0 ||
        !isValid(invested) ||
        !isValid(amount) ||
        !isValid(targetPrice)
    ) return 0;

    const bigInvested = new Big(invested);
    const bigAmount = new Big(amount);
    const bigTargetPrice = new Big(targetPrice);

    // console.log('invested:', bigInvested.toNumber(), 'amount:', bigAmount.toNumber(),'target price:', bigTargetPrice.toNumber());

    const futureHoldings = bigAmount.times(bigTargetPrice);
    // console.log(futureHoldings.toString())
    const profit = futureHoldings.minus(bigInvested); 
    
    return profit;
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
