import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select from './Select';
import { BiDollar, BiCoinStack } from 'react-icons/bi';
import { useData } from '../contexts/dataContext';
import { numberIsValid } from '../utils/numberIsValid';
import { formatCoinAmount } from '../utils/formatCoinAmount';
import { Card } from '../styles/shared/Card';
import styled from 'styled-components';
import { Label } from '../styles/shared/Label';
import { InputContainer } from '../styles/shared/InputContainer';


const MainFormCard = styled(Card)`
    grid-row: span 2;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
`;

const DisabledInputContainer = styled(InputContainer)`
    background-color: var(--primary-400);
`;

const Spacer = styled.div`
    margin-bottom: 0.5rem;
`;

const MainForm = () => {
    const { amount, invested, buyingPrice, setInvested, setBuyingPrice, setTargetPrice } = useData();
    const { t } = useTranslation();

    const priceInputRef = useRef();
    const investedInputRef = useRef();

    useEffect(() => {
        if (invested) investedInputRef.current.value = invested;
        if (buyingPrice) priceInputRef.current.value = buyingPrice;
    }, [invested, buyingPrice])

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
        <MainFormCard>
            <div>
                <Spacer>
                    <Label htmlFor="invested">{t('invested_label')}</Label>
                </Spacer>
                <InputContainer>
                    <input onChange={handleInvestedChange} maxLength="12" ref={investedInputRef} />
                    <span><BiDollar /></span>
                </InputContainer>
            </div>

            <div>
                <Spacer>
                    <Label htmlFor="coin">{t('coin_label')}</Label>
                </Spacer>
                <Select
                    setDisplayPrice={setDisplayPrice}
                />
            </div>

            <div>
                <Spacer>
                    <Label htmlFor="price">{t('buying_price_label')}</Label>
                </Spacer>
                <InputContainer>
                    <input ref={priceInputRef} name="price" maxLength="12" onChange={handlePriceChange} />
                    <span><BiDollar /></span>
                </InputContainer>
            </div>

            <div>
                <Spacer>
                    <Label htmlFor="amount">{t('coin_amount_label')}</Label>
                </Spacer>
                <DisabledInputContainer>
                    <input name="amount" value={formatCoinAmount(amount)} readOnly disabled />
                    <BiCoinStack />
                </DisabledInputContainer>
            </div>
        </MainFormCard>
    );
};

export default MainForm;