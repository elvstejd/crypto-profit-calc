import Decimal from "decimal.js";

const integerFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const significantDigitFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 4
});

export function formatCoinPrice(price) {
    const isInteger = new Decimal(price).mod(1).toString() === "0";
    if (isInteger) {
        // value is integer
        return integerFormatter.format(price);
    } else {
        //value has decimals
        if (price.indexOf(".00") !== -1) {
            // there are significant values to worry about
            return significantDigitFormatter.format(price);
        }
        return decimalFormatter.format(price);
    }
}
