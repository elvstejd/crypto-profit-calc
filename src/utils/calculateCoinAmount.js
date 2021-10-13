import Big from 'big.js';
import { isValid } from './isValid';

export function calculateCoinAmount(invested, buyingPrice) {
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
