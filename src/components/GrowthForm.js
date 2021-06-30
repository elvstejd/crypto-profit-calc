import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDollar, BiCaretDown, BiCaretUp } from 'react-icons/bi';
import '../styles/GrowthForm.css';

function isProfit(growthPercentage) {
    return growthPercentage >= 0;
}

function alwaysPositive(percentage) {
    if (percentage < 0) {
        return percentage*-1;
    }

    return percentage;
}


const GrowthForm = (props) => {
    const { t } = useTranslation();
    const targetPriceRef = useRef();

    useEffect(() => {
        targetPriceRef.current.value = props.targetPrice || 0;
    }, [props.targetPrice]);

    return (
        <div className="container">
            <label htmlFor="target-price">{t('target_price_label')}</label>
            <div id="target-price-area">
                <div className="input-wrapper" >
                    <input id="target-price-input" ref={targetPriceRef} name="target-price" type="number" onChange={props.handleTargetPriceChange}/>
                    <span><BiDollar /></span>
                </div>
                <button id="plus-btn" onClick={props.handleAddPrice}>+</button>
                <button id="plus-btn" onClick={props.handleMinusPrice}>-</button>
            </div>
            <div className="growth-container">
                <span 
                className="caret"
                id={isProfit(props.percentage) ? "profit" : "loss"}
                >{isProfit(props.percentage) ? <BiCaretUp /> : <BiCaretDown/>}</span>{alwaysPositive(props.percentage)}%
            </div>
        </div>
    );
}

export default GrowthForm;