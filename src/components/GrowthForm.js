import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDollar, BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { useData } from '../contexts/dataContext';
import '../styles/GrowthForm.css';
import { parseValue } from '../util/helperFunctions';

function isProfit(growthPercentage) {
    return growthPercentage >= 0;
}

function alwaysPositive(percentage) {
    if (percentage < 0) {
        return percentage * -1;
    }

    return percentage;
}


const GrowthForm = (props) => {
    const { setTargetPrice, percentage, targetPrice } = useData();
    const { t } = useTranslation();
    const targetPriceRef = useRef();

    useEffect(() => {
        targetPriceRef.current.value = targetPrice || 0;
    }, [targetPrice]);

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
        <div className="container">
            <label htmlFor="target-price">{t('target_price_label')}</label>
            <div id="target-price-area">
                <div className="input-wrapper" >
                    <input id="target-price-input" ref={targetPriceRef} name="target-price" type="number" onChange={handleTargetPriceChange} />
                    <span><BiDollar /></span>
                </div>
                <div className="btns">
                    <button className="btn plus" onClick={handleAddPrice}>+</button>
                    <button className="btn minus" onClick={handleMinusPrice}>-</button>
                </div>
            </div>
            <div className="growth-container">
                <span
                    className="caret"
                    id={isProfit(percentage) ? "profit" : "loss"}
                >{isProfit(percentage) ? <BiCaretUp /> : <BiCaretDown />}</span>{alwaysPositive(percentage)}%
            </div>
        </div>
    );
}

export default GrowthForm;