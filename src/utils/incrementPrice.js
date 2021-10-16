import Decimal from 'decimal.js';

export function incrementPrice(inputPrice) {
    const price = new Decimal(inputPrice);

    if (price.greaterThanOrEqualTo(1000)) {
        return price.add(100).toFixed(0);
    }

    if (price.greaterThanOrEqualTo(100)) {
        return price.add(10).toFixed(0);
    }

    if (price.lessThan(1)) {
        // count leading 0s
        let leadingZeroesCount = 0;

        const priceChars = price.toString().split('');

        for (const char of priceChars) {
            if (char === '0') {
                leadingZeroesCount += 1;
            } else if (char === '.') {
                continue;
            } else {
                break;
            }
        }

        leadingZeroesCount -= 1;

        if (leadingZeroesCount <= 1) return price.add(0.10).toString();
        const decimalIncrement = `0.${"0".repeat(leadingZeroesCount + 1)}1`;
        return price.add(decimalIncrement).toString();
    }

    return price.add(1).toFixed(0);
}
