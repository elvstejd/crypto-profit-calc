import Decimal from 'decimal.js';

export function calculateCoinAmount(invested, buyingPrice) {
    // eslint-disable-next-line eqeqeq
    if (buyingPrice == 0) return 0;

    return new Decimal(invested).dividedBy(buyingPrice).toString();
}
