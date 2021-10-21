import { decrementPrice } from "../../utils/decrementPrice";

test('should decrement 1 and round down to numbers in the ones with decimals', () => {
    const result = decrementPrice("5.14");
    expect(result).toBe("4");
});

test('should decrement 1 to integers in the ones', () => {
    const result = decrementPrice("4");
    expect(result).toBe("3");
});

test('should decrement 1 and round down numbers in the tens with decimals', () => {
    const result = decrementPrice('63.45');
    expect(result).toBe('62');
});

test('should decrement 1 to integers in the tens', () => {
    const result = decrementPrice("28");
    expect(result).toBe('27');
});

test('should decrement 10 and rown down numbers in the hundreds with decimals', () => {
    const result = decrementPrice('214.45');
    expect(result).toBe('204');
});

test('should decrement 10 to integers in the hundreds', () => {
    const result = decrementPrice('122');
    expect(result).toBe('112');
});

test('should decrement 100 to integers in the thousands', () => {
    const result = decrementPrice('15214');
    expect(result).toBe('15114');
});

test('should decrement 100 and round down numbers in the thousands with decimals', () => {
    const result = decrementPrice('15214.45');
    expect(result).toBe('15114');
});

/* for numbers less than 1 (x > 1) */

test('should decrement 10 cents when no leading zeroes (0)', () => {
    const result = decrementPrice('0.42');
    expect(result).toBe('0.32');
});

test('should decrement 01 cent when it has one leading zero (0)', () => {
    const result = decrementPrice('0.042');
    expect(result).toBe('0.032');
});

test('should decrement 1 led by three 0s when number has two leading 0s', () => {
    const result = decrementPrice('0.00457');
    expect(result).toBe('0.00447');
});

test('should decrement 1 led by four 0s when number has three leading 0s', () => {
    const result = decrementPrice('0.0003247');
    expect(result).toBe('0.0003147');
});

test('should decrement 1 led by five 0s when number has four leading 0s', () => {
    const result = decrementPrice('0.000027');
    expect(result).toBe('0.000026');
});

test('should never return a negative value', () => {
    const result = decrementPrice('0');
    expect(result).toBe('0');
});

test('should decrement the elon coin accordingly', () => {
    const result = decrementPrice('0.0000004977');
    expect(result).toBe('0.0000004877');
});

