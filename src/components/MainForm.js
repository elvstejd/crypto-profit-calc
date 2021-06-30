import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { BiDollar, BiCoinStack } from 'react-icons/bi';

const searchList = [
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'DOGE',
        label: 'DOGE'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
];

const MainForm = (props) => {
    const { t } = useTranslation();

    return (
        <div className="container" id="main-form">
            <div>
                <label htmlFor="invested">{t('invested_label')}</label>
                <div className="input-wrapper" >
                    <input type="number" onChange={props.handleInvestedChange}/>
                    <span><BiDollar /></span>
                </div>
            </div>
                
            <div>
                <label htmlFor="coin">{t('coin_label')}</label>
                <Select 
                    className="react-select-container"
                    classNamePrefix="rs"
                    value={props.selectedCoin}
                    options={searchList}
                    onChange={props.handleCoinChange}
                    placeholder="Search here"
                    openMenuOnClick={false}
                    isClearable
                />
            </div>

            <div>
                <label htmlFor="price">{t('buying_price_label')}</label>
                <div className="input-wrapper" >
                    <input type="number" name="price" onChange={props.handlePriceChange}/>
                    <span><BiDollar /></span>
                </div>
            </div>

            <div>
                <label htmlFor="amount">{t('coin_amount_label')}</label>
                <div className="input-wrapper" >
                    <input name="amount" value={props.amount} readOnly/>
                    <BiCoinStack />
                </div>
            </div>
        </div>
    );
};

export default MainForm;