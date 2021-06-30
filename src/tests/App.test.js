import { parseValues } from '../components/App';

test('parse values should be 0 when called with NaN', () => {
    const value = parseValues(NaN);
    expect(value).toBe(0);
});

test('parse values should be 0 when called with Infinity', () => {
    const value = parseValues(NaN);
    expect(value).toBe(0);
});

test('parse values should be the correct number when called with one', () => {
    const value = parseValues(15);
    expect(value).toBe(15);
});