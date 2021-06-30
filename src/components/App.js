import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import './App.css';

function calculateProfit(invested, amount, targetPrice) {
    const futureHoldings = amount * targetPrice;
    const profit = futureHoldings - invested; 
    return parseValue(profit);
}

function calculateAmount(invested, buyingPrice) {
    const amount = invested/buyingPrice; 
    return parseValue(amount);
}

function calculatePercentage(profit, invested) {
    return (profit/invested)*100;
}

function parseValue(v) {
    const value = parseFloat(v);
    if (isNaN(value)) return 0;
    if (!isFinite(value)) return 0;
    return value;
}

const round = (number) => {
    return number.toFixed(2);
}
    
const App = () => {
    const [selectedCoin, setSelectedCoin] = useState(null); 
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setProfit(round(calculateProfit(invested, amount, targetPrice)));
        setAmount(calculateAmount(invested, buyingPrice));
    }, [invested, buyingPrice, amount, targetPrice]);

    useEffect(() => {
        setPercentage(parseValue(round(calculatePercentage(profit, invested))));
    }, [profit, invested]);

    useEffect(() => {
        if (selectedCoin) {
            
        }
    }, [selectedCoin]);

    function handleCoinChange(selectedCoin) {
        setSelectedCoin(selectedCoin);
    }

    function handleTargetPriceChange(e) {
        let targetPrice = parseValue(e.target.value); 
        setTargetPrice(targetPrice);
    }

    function handlePriceChange(e) {
        let currentPrice = parseValue(e.target.value); 
        setBuyingPrice(currentPrice);
    }

    function handleInvestedChange(e) {
        let invested = parseValue(e.target.value); 
        setInvested(invested);
    }

    function handleAddPrice() {
        const newValue = targetPrice + 1;
        setTargetPrice(newValue);
    }

    function handleMinusPrice() {
        const newValue = targetPrice - 1;
        setTargetPrice(newValue);
    }

    return (
        <div>
            <header>
                <h1>ProfitCalc</h1>
            </header>
            <main>
                <MainForm
                    handleCoinChange={handleCoinChange}
                    handleInvestedChange={handleInvestedChange}
                    handlePriceChange={handlePriceChange}
                    selectedCoin={selectedCoin}
                    amount={amount}
                />
                <ProfitDisplay profit={profit} />
                <GrowthForm 
                    handleTargetPriceChange={handleTargetPriceChange}
                    percentage={percentage}
                    targetPrice={targetPrice}
                    handleAddPrice={handleAddPrice}
                    handleMinusPrice={handleMinusPrice}
                />
            </main>
            <LanguageSelector />
        </div>
    );
}

export default App;

export { parseValue };