import React, { useState, useEffect, useRef } from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import { 
    calculateProfit, 
    calculateAmount, 
    calculatePercentage, 
    parseValue
} from '../util/helperFunctions';
import { useTranslation } from 'react-i18next';
import '../styles/App.css';
import logo from '../assets/images/logo.png';
import Big from 'big.js';
    
const App = () => {
    const [selectedCoin, setSelectedCoin] = useState(null); 
    const [amount, setAmount] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [invested, setInvested] = useState(0);
    const [profit, setProfit] = useState(new Big(0));
    const [percentage, setPercentage] = useState(0);
    const { t } = useTranslation();

    const targetPriceInputRef = useRef();

    const lastProfit = useRef(new Big(0));
    
    useEffect(() => {
        console.log(profit, lastProfit.current)
        // if (profit === lastProfit.current) {
            setProfit(calculateProfit(invested, amount, targetPrice));
            lastProfit.current = profit
            console.log('set profit')
        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invested, targetPrice, amount]);
    
    useEffect(() => {
        setAmount(calculateAmount(invested, buyingPrice));
        console.log('set amount')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invested, buyingPrice]);

    useEffect(() => {
        setPercentage(calculatePercentage(profit, invested));
    }, [profit]);

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

    function updateTargetPrice(price) {
        setBuyingPrice(price);
        setTargetPrice(price);
    }

    return (
        <div>
            <header>
                <img src={logo} alt="logo" />
            </header>
            <div className="tagline-container">
                <p>{t('tagline')}</p>
            </div>
            <main>
                <MainForm
                    handleCoinChange={handleCoinChange}
                    handleInvestedChange={handleInvestedChange}
                    handlePriceChange={handlePriceChange}
                    selectedCoin={selectedCoin}
                    updateTargetPrice={updateTargetPrice}
                    amount={amount}
                />
                
                <ProfitDisplay profit={profit} />
                <GrowthForm 
                    handleTargetPriceChange={handleTargetPriceChange}
                    percentage={percentage}
                    targetPrice={targetPrice}
                    handleAddPrice={handleAddPrice}
                    handleMinusPrice={handleMinusPrice}
                    targetPriceInputRef={targetPriceInputRef}
                />
            </main>
            <div className="currency-disclaimer-container">
                <p>*All prices in US dollars.</p>
            </div>
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
