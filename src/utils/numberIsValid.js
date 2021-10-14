import Decimal from "decimal.js";

export function numberIsValid(number) {
    if (number.length > 12) return false;
    try {
        const num = new Decimal(number);
        if (num.isNegative()) return false;
    } catch (e) {
        return false;
    }
    return true;
}
