import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import { 
    calculateProfit, 
    calculateAmount, 
    calculatePercentage, 
    parseValue,
    round
} from '../util/helperFunctions';
import { useTranslation } from 'react-i18next';
import '../styles/App.css';
    
const App = () => {
    const [selectedCoin, setSelectedCoin] = useState(null); 
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const { t } = useTranslation();

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
            <div className="tagline">{t('tagline')}</div>
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
            <footer>
                <div className="me">
                    <p>Made by ME</p>
                    <p>Feedback</p>
                </div>
                <LanguageSelector />
            </footer>
        </div>
    );
}

export default App;

export { parseValue };