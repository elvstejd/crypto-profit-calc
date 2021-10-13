import { calculateCoinAmount } from "../../utils/calculateCoinAmount";


test('should give a correct amount on large numbers', () => {
    const result = calculateCoinAmount(99999999999, 10.1);
    expect(result).toBe("9900990098.9108910891");
});