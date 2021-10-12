import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../contexts/dataContext';
import '../styles/ProfitDisplay.css';


const ProfitDisplay = () => {
    const { profit } = useData();
    const { t } = useTranslation();

    return (
        <div className="container">
            <label>{t('profitloss_label')}</label>
            <div id="earnings-container">
                <div
                    className={"earnings"}
                    id={profit >= 0 ? "profit" : "loss"}
                >
                    {profit >= 0 ? ("$" + (profit * 1).toLocaleString()) : ("-$" + (profit * -1).toLocaleString())}
                </div>
            </div>
        </div>
    );
}

export default ProfitDisplay;
