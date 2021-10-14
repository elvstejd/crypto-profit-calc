import { formatGrowthPercent } from "../../utils/formatGrowthPercent";


test('should round decimals to 2', () => {
    const result = formatGrowthPercent('108821.568627450');
    expect(result).toBe('108,821.57');
});

test('should return absolute value when passed a negative value', () => {
    const result = formatGrowthPercent('-21.56862745');
    expect(result).toBe('21.57');
});

test('should return integer as integer', () => {
    const result = formatGrowthPercent('32');
    expect(result).toBe('32');
});

test('should return a positive integer when passed a negative one', () => {
    const result = formatGrowthPercent('-32');
    expect(result).toBe('32');
});


