import { numberIsValid } from "../../utils/numberIsValid";

test('should return true given 0 as input', () => {
    const result = numberIsValid("0");
    expect(result).toBe(true);
});

test('should return true given an integer as input', () => {
    const result = numberIsValid("78");
    expect(result).toBe(true);
});

test('should return true given a decimal as input', () => {
    const result = numberIsValid("45.12");
    expect(result).toBe(true);
});

test('should return false given an input with non numeric characters', () => {
    const result = numberIsValid("s");
    expect(result).toBe(false);
});

test('should return false given an input with mixed numeric and non numeric characters', () => {
    const result = numberIsValid("454d");
    expect(result).toBe(false);
});

test('should return false given an input with more than 12 characters', () => {
    const result = numberIsValid("4512457899565");
    expect(result).toBe(false);
});

test('should return false given a negative input', () => {
    const result = numberIsValid("-45.25");
    expect(result).toBe(false);
});

test('should return false given an input with a minus in the middle', () => {
    const result = numberIsValid("45-25");
    expect(result).toBe(false);
});

test('should return false given an empty string', () => {
    const result = numberIsValid("");
    expect(result).toBe(false);
});
