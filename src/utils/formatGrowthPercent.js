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

export function formatGrowthPercent(growth) {
    const value = new Decimal(growth).abs()
    const isInteger = new Decimal(value).mod(1).toString() === "0";
    if (isInteger) {
        // value is integer
        return integerFormatter.format(value);
    } else {
        //value has decimals
        if (value.toString().indexOf(".00") !== -1) {
            // there are significant values to worry about
            return significantDigitFormatter.format(value);
        }
        return decimalFormatter.format(value);
    }
}
