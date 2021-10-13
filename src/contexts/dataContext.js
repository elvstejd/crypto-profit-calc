import { createContext, useContext, useState, useEffect } from "react";
import { calculateProfit } from '../utils/calculateProfit';
import { calculateCoinAmount as calculateAmount } from '../utils/calculateCoinAmount';
import { calculateGrowthPercentage as calculatePercentage } from '../utils/calculateGrowthPercentage';
import { calculateGrossBalance } from '../utils/calculateGrossBalance';
import Big from 'big.js';

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

function DataProvider({ children }) {
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState(new Big(0));
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const amountResult = calculateAmount(invested, buyingPrice);
        const profitResult = calculateProfit(calculateGrossBalance(amountResult, targetPrice), invested);
        setProfit(profitResult);
        setAmount(amountResult);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetPrice, invested, buyingPrice]);

    useEffect(() => {
        setPercentage(calculatePercentage(profit, invested));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profit]);

    const value = {
        setInvested,
        setBuyingPrice,
        setTargetPrice,
        percentage,
        targetPrice,
        profit,
        amount
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
