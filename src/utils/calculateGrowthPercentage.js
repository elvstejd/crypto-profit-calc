import Decimal from 'decimal.js';

export function calculateGrowthPercentage(profit, invested) {
    // eslint-disable-next-line eqeqeq
    if (invested == 0) return 0;

    return new Decimal(profit).dividedBy(invested).times(100).toString();
}
