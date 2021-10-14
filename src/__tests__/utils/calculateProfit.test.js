import { calculateCoinAmount } from "../../utils/calculateCoinAmount";
import { calculateGrossBalance } from "../../utils/calculateGrossBalance";
import { calculateProfit } from "../../utils/calculateProfit";


// calculateProfit()

test('returns 0 given an amount known to cause trouble', () => {
    const coinAmount = calculateCoinAmount(99999999999, 10.1);
    const grossBalance = calculateGrossBalance(coinAmount, 10.1)
    const result = calculateProfit(grossBalance, 99999999999);

    expect(result).toBe("0");
});