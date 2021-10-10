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
import DataProvider from '../contexts/dataContext';

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

    function handleAddPrice() {
        const newValue = targetPrice + 1;
        setTargetPrice(newValue);
    }

    function handleMinusPrice() {
        const newValue = targetPrice - 1;
        setTargetPrice(newValue);
    }

    return (
        <DataProvider>
            <div>
                <header>
                    <img src={logo} alt="logo" />
                </header>
                <div className="tagline-container">
                    <p>{t('tagline')}</p>
                </div>
                <main>
                    <MainForm />

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
                    <p>*{t("currency_disclaimer")}</p>
                </div>
                <footer>
                    <div className="me">
                        <p>{t("made_by")}</p>
                        <p>{t("feedback")}</p>
                    </div>
                    <LanguageSelector />
                </footer>
            </div>
        </DataProvider>
    );
}

export default App;
