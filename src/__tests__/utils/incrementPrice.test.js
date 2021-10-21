import { incrementPrice } from "../../utils/incrementPrice";

test('should add 1 and round down to numbers in the ones with decimals', () => {
    const result = incrementPrice("5.14");
    expect(result).toBe("6");
});

test('should increment 1 to integers in the ones', () => {
    const result = incrementPrice("4");
    expect(result).toBe("5");
});

test('should increment 1 and round down numbers in the tens with decimals', () => {
    const result = incrementPrice('63.45');
    expect(result).toBe('64');
});

test('should increment 1 to integers in the tens', () => {
    const result = incrementPrice("28");
    expect(result).toBe('29');
});

test('should increment 10 and rown down numbers in the hundreds with decimals', () => {
    const result = incrementPrice('214.45');
    expect(result).toBe('224');
});

test('should increment 10 to integers in the hundreds', () => {
    const result = incrementPrice('122');
    expect(result).toBe('132');
});

test('should increment 100 to integers in the thousands', () => {
    const result = incrementPrice('15214');
    expect(result).toBe('15314');
});

test('should increment 100 and round down numbers in the thousands with decimals', () => {
    const result = incrementPrice('15214.45');
    expect(result).toBe('15314');
});

/* for numbers less than 1 (x > 1) */

test('should add 10 cents when no leading zeroes (0)', () => {
    const result = incrementPrice('0.42');
    expect(result).toBe('0.52');
});

test('should add 1 cent when it has one leading zero (0)', () => {
    const result = incrementPrice('0.042');
    expect(result).toBe('0.052');
});

test('should add 1 led by three 0s when number has two leading 0s', () => {
    const result = incrementPrice('0.00457');
    expect(result).toBe('0.00467');
});

test('should add 1 led by four 0s when number has three leading 0s', () => {
    const result = incrementPrice('0.0003247');
    expect(result).toBe('0.0003347');
});

test('should add 1 led by five 0s when number has four leading 0s', () => {
    const result = incrementPrice('0.000027');
    expect(result).toBe('0.000028');
});

test('should increment the elon coin accordingly', () => {
    const result = incrementPrice('0.0000004977');
    expect(result).toBe('0.0000005077');
});
