import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Select from './Select';
import { BiDollar, BiCoinStack } from 'react-icons/bi';
import searchList from '../testdata/coinList';
import '../styles/MainForm.css';
import { parseValue } from '../util/helperFunctions';
import { useData } from '../contexts/dataContext';

const MainForm = () => {
    const { amount, setInvested, setBuyingPrice, setTargetPrice } = useData();
    const { t } = useTranslation();

    const priceInputRef = useRef();

    const setDisplayPrice = (price) => {
        priceInputRef.current.value = price;
        // priceInputRef.current.onchange();
        setBuyingPrice(price);
        setTargetPrice(price);
    }

    function handleInvestedChange(e) {
        let invested = parseValue(e.target.value);
        setInvested(invested);
    }

    function handlePriceChange(e) {
        let currentPrice = parseValue(e.target.value);
        setBuyingPrice(currentPrice);
    }

    return (
        <div className="container" id="main-form">
            <div>
                <label htmlFor="invested">{t('invested_label')}</label>
                <div className="input-wrapper" >
                    <input type="number" onChange={handleInvestedChange} />
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
                    <input ref={priceInputRef} type="number" name="price" onChange={handlePriceChange} />
                    <span><BiDollar /></span>
                </div>
            </div>

            <div>
                <label htmlFor="amount">{t('coin_amount_label')}</label>
                <div className="input-wrapper" >
                    <input name="amount" value={amount} readOnly />
                    <BiCoinStack />
                </div>
            </div>
        </div>
    );
};

export default MainForm;