import { 
    calculateProfit,
    calculateAmount,
    calculatePercentage,
    parseValue
} from "../util/helperFunctions";


// Test parseValue()
test('parse values should be 0 when called with NaN', () => {
    const value = parseValue(NaN);
    expect(value).toBe(0);
});

test('parse values should be 0 when called with Infinity', () => {
    const value = parseValue(NaN);
    expect(value).toBe(0);
});

test('parse values should be the correct number when called with one', () => {
    const value = parseValue(15);
    expect(value).toBe(15);
});

// Test calculateAmount()
test('calculate amount should give a correct value', () => {
    const invested = 1000;
    const buyingPrice = 25.5;

    const amount = calculateAmount(invested, buyingPrice);

    expect(amount).toBe("39.22");
});

test('calculate amount should return 0 when given a 0, 0', () => {
    const amount = calculateAmount(0, 0);
    expect(amount).toBe(0);
});

test('calculate amount should return 0 when given a NaN', () => {
    const amount = calculateAmount(NaN, null);
    expect(amount).toBe(0);
});

test('calculate amount should return 0 when given a null', () => {
    const amount = calculateAmount(null, null);
    expect(amount).toBe(0);
});

test('calculate amount should return 0 when given a undefined', () => {
    const amount = calculateAmount(undefined, undefined);
    expect(amount).toBe(0);
});


// Test calculateProfit()
test('calculate profit should give a correct value', () => {
    const invested = 1000;
    const buyingPrice = 25.5;
    const targetPrice = 25.5;

    const profit = calculateProfit(invested, buyingPrice, targetPrice);

    expect(profit).toBe("-349.75");
});

test('calculate profit work with decimal values', () => {
    const invested = 10;
    const amount = 0.65;
    const targetPrice = 15.36;

    const profit = calculateProfit(invested, amount, targetPrice);

    expect(profit).toBe("0.00");
});

test('calculate profit should return 0 when given a 0, 0', () => {
    const amount = calculateProfit(0, 0, 0);
    expect(amount).toBe("0.00");
});

test('calculate profit should return 0 when given a NaN', () => {
    const profit = calculateProfit(NaN, NaN, NaN);
    expect(profit).toBe(0);
});

test('calculate profit should return 0 when given a null', () => {
    const profit = calculateProfit(null, null, null);
    expect(profit).toBe(0);
});

test('calculate profit should return 0 when given a undefined', () => {
    const profit = calculateProfit(undefined, undefined, undefined);
    expect(profit).toBe(0);
});


// Test calculatePercentage()

test('calculate percentage should return up to 2 decimal places', () => {
    
});

test('calculate percentage should not return decimal places if not needed', () => {
    
});

// test('calculate percentage should return up to 2 decimal places', () => {
    
// });

// test('calculate percentage should return up to 2 decimal places', () => {
    
// });
