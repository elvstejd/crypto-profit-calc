import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProfitDisplay.css';

const ProfitDisplay = (props) => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <label>{t('profitloss_label')}</label>
            <div id="earnings-container">
                <div className="earnings" id={props.profit >= 0 ? "profit" : "loss"}>
                    {props.profit >= 0 ? ("$" + (props.profit*1).toLocaleString()) : ("-$" + (props.profit*-1).toLocaleString())}
                </div>
            </div>
        </div>
    );
}

export default ProfitDisplay;