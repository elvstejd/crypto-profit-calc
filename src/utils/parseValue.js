import Big from 'big.js';

export function parseValue(number) {
    if (!number) return null;
    try {
        const value = new Big(number);
        return value;
    } catch (error) {
        return null;
    }
}
