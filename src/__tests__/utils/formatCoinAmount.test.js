import { formatCoinAmount } from "../../utils/formatCoinAmount";

test('should cut it to two digits after the dot', () => {
    const result = formatCoinAmount('0.020833333');
    expect(result).toBe('0.02');
});

test('should keep 2 significant digits after .00', () => {
    const result = formatCoinAmount('0.0003089280');
    expect(result).toBe('0.00031');
});

test('should format integers in the millions correctly', () => {
    const result = formatCoinAmount('247854697');
    expect(result).toBe('247,854,697');
});
