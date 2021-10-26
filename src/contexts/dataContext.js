import { createContext, useContext, useState, useEffect } from "react";
import { calculateProfit } from '../utils/calculateProfit';
import { calculateCoinAmount as calculateAmount } from '../utils/calculateCoinAmount';
import { calculateGrowthPercentage as calculatePercentage } from '../utils/calculateGrowthPercentage';
import { calculateGrossBalance } from '../utils/calculateGrossBalance';
import Decimal from "decimal.js";

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

function DataProvider({ children }) {
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState("0");
    const [percentage, setPercentage] = useState(0);
    const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');

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

    function setValuesFromShare(invested, buyingPrice, sellingPrice) {
        setInvested(invested);
        setBuyingPrice(buyingPrice);
        setTargetPrice(sellingPrice);
    }

    const value = {
        setInvested,
        setBuyingPrice,
        setTargetPrice,
        setSelectedCoinSymbol,
        selectedCoinSymbol,
        targetPrice,
        percentage: new Decimal(buyingPrice).equals(targetPrice) ? "0" : percentage,
        profit: new Decimal(buyingPrice).equals(targetPrice) ? "0" : profit,
        amount,
        invested,
        buyingPrice,
        setValuesFromShare
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
