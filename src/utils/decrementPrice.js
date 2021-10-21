import Decimal from "decimal.js";

export function decrementPrice(inputPrice) {
    const price = new Decimal(inputPrice);

    if (price.greaterThanOrEqualTo(1000)) {
        return price.minus(100).toFixed(0);
    }

    if (price.greaterThanOrEqualTo(100)) {
        return price.minus(10).toFixed(0);
    }

    if (price.lessThan(1) && price.greaterThan(0)) {
        // count leading 0s
        let leadingZeroesCount = 0;

        const priceChars = price.toFixed().toString().split('');

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

        if (leadingZeroesCount === 0) return price.minus(0.10).toFixed().toString();
        if (leadingZeroesCount === 1) return price.minus(0.01).toFixed().toString();
        const decimalIncrement = `0.${"0".repeat(leadingZeroesCount + 1)}1`;
        return price.minus(decimalIncrement).toFixed().toString();
    }

    const finalResult = price.minus(1);
    if (finalResult.isNegative()) return "0";
    return finalResult.toFixed(0)
}