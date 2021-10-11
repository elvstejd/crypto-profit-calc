import { createContext, useContext, useState, useEffect } from "react";
import {
    calculateProfit,
    calculateAmount,
    calculatePercentage
} from '../util/helperFunctions';
import Big from 'big.js';

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

function DataProvider({ children }) {
    // state
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState(new Big(0));
    const [percentage, setPercentage] = useState(0);

    // use effects
    useEffect(() => {
        setProfit(calculateProfit(invested, amount, targetPrice));
        console.log('set profit');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invested, targetPrice, amount]);

    useEffect(() => {
        const amount = calculateAmount(invested, buyingPrice);
        setAmount(amount);
        console.log(amount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invested, buyingPrice]);

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
