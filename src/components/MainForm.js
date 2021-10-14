import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Select from './Select';
import { BiDollar, BiCoinStack } from 'react-icons/bi';
import searchList from '../testdata/coinList';
import '../styles/MainForm.css';
import { useData } from '../contexts/dataContext';
import { numberIsValid } from '../utils/numberIsValid';
import { formatCoinAmount } from '../utils/formatCoinAmount';

const MainForm = () => {
    const { amount, setInvested, setBuyingPrice, setTargetPrice } = useData();
    const { t } = useTranslation();

    const priceInputRef = useRef();

    const setDisplayPrice = (price) => {
        priceInputRef.current.value = price;
        setBuyingPrice(price);
        setTargetPrice(price);
    }

    function handleInvestedChange(e) {
        let invested = e.target.value;
        if (!invested) setInvested("0");
        if (numberIsValid(invested)) setInvested(invested);
    }

    function handlePriceChange(e) {
        let currentPrice = e.target.value;
        if (!currentPrice) setBuyingPrice("0")
        if (numberIsValid(currentPrice)) setBuyingPrice(currentPrice);
    }

    return (
        <div className="container" id="main-form">
            <div>
                <label htmlFor="invested">{t('invested_label')}</label>
                <div className="input-wrapper" >
                    <input onChange={handleInvestedChange} maxLength="12" />
                    <span><BiDollar /></span>
                </div>
            </div>

            <div>
                <label htmlFor="coin">{t('coin_label')}</label>
                <Select
                    options={searchList}
                    setDisplayPrice={setDisplayPrice}
                />
            </div>

            <div>
                <label htmlFor="price">{t('buying_price_label')}</label>
                <div className="input-wrapper" >
                    <input ref={priceInputRef} name="price" maxLength="12" onChange={handlePriceChange} />
                    <span><BiDollar /></span>
                </div>
            </div>

            <div>
                <label htmlFor="amount">{t('coin_amount_label')}</label>
                <div className="input-wrapper" >
                    <input name="amount" value={formatCoinAmount(amount)} readOnly />
                    <BiCoinStack />
                </div>
            </div>
        </div>
    );
};

export default MainForm;