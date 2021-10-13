import Big from 'big.js';
import { isValid } from './isValid';

export function calculateGrowthPercentage(profit, invested) {
    if (
        invested == 0 ||
        !isValid(invested) ||
        !isValid(profit)
    ) return 0;

    const bigProfit = new Big(profit);
    const bigInvested = new Big(invested);

    return bigProfit.div(bigInvested).times(100).toFixed(2);
}
