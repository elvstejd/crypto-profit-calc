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
    maximumSignificantDigits: 2
});

export function formatProfitToUSD(profit) {
    const isInteger = new Decimal(profit).mod(1).toString() === "0";
    if (isInteger) {
        // value is integer
        return integerFormatter.format(profit);
    } else {
        //value has decimals
        if (profit.indexOf(".00") !== -1) {
            // there are significant values to worry about
            return significantDigitFormatter.format(profit);
        }
        return decimalFormatter.format(profit);
    }
}
