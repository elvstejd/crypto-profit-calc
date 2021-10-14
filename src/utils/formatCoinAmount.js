import Decimal from "decimal.js";

const integerFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const decimalFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
});

const significantDigitFormatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2
});

export function formatCoinAmount(amount) {
    const isInteger = new Decimal(amount).mod(1).toString() === "0";
    if (isInteger) {
        // value is integer
        return integerFormatter.format(amount);
    } else {
        //value has decimals
        if (amount.indexOf(".00") !== -1) {
            // there are significant values to worry about
            return significantDigitFormatter.format(amount);
        }
        return decimalFormatter.format(amount);
    }
}
