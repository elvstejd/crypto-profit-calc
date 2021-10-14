import { formatProfitToUSD } from "../../utils/formatProfitToUSD";

test('should not return integers with decimals', () => {
    const result = formatProfitToUSD('50');
    expect(result).toBe('$50');
});

test('should not round decimals', () => {
    const result = formatProfitToUSD('78.44');
    expect(result).toBe('$78.44');
});

test('should not round decimals on large numbers', () => {
    const result = formatProfitToUSD('124578.45');
    expect(result).toBe('$124,578.45');
});

test('should retain 2 significant digits after .00', () => {
    const result = formatProfitToUSD('0.000002547');
    expect(result).toBe('$0.0000025');
});

test('should retain 2 significant digits', () => {
    const result = formatProfitToUSD('10.0909');
    expect(result).toBe('$10.09');
});