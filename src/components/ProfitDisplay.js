import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/dataContext';
import '../styles/ProfitDisplay.css';

function getAppropiateSize(profitAmount) {
    if (!profitAmount) return;

    const amount = (profitAmount * 1).toString().length;

    if (amount < 11) return "lg";
    if (amount <= 13) return "md";
    if (amount <= 16) return "sm";
}

const ProfitDisplay = (props) => {
    const { profit } = useData();
    const { t } = useTranslation();

    return (
        <div className="container">
            <label>{t('profitloss_label')}</label>
            <div id="earnings-container">
                <div
                    className={"earnings"}
                    // className={"earnings " + getAppropiateSize(props.profit)}
                    id={profit >= 0 ? "profit" : "loss"}
                >
                    {profit >= 0 ? ("$" + (profit * 1).toLocaleString()) : ("-$" + (profit * -1).toLocaleString())}
                </div>
            </div>
        </div>
    );
}

export default ProfitDisplay;
