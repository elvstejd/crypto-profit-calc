import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProfitDisplay.css';

function getAppropiateSize(profitAmount) {
    if (!profitAmount) return;

    const amount = (profitAmount*1).toString().length;
    
    if (amount < 11) return "lg";
    if (amount <= 13) return "md";
    if (amount <= 16) return "sm";
}

const ProfitDisplay = (props) => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <label>{t('profitloss_label')}</label>
            <div id="earnings-container">
                <div 
                    className={"earnings " + getAppropiateSize(props.profit)}
                    id={props.profit >= 0 ? "profit" : "loss"}
                    >
                    {props.profit >= 0 ? ("$" + (props.profit*1).toLocaleString()) : ("-$" + (props.profit*-1).toLocaleString())}
                </div>
            </div>
        </div>
    );
}

export default ProfitDisplay;