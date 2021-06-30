import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDollar } from 'react-icons/bi';
import '../styles/GrowthForm.css';


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
            <p>{t('percentage_label')}: {props.percentage}%</p>
        </div>
    );
}

export default GrowthForm;