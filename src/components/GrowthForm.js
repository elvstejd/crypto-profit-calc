import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BiDollar, BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { useData } from '../contexts/dataContext';
import { formatGrowthPercent } from '../utils/formatGrowthPercent';
import { numberIsValid } from '../utils/numberIsValid';
import styled from 'styled-components';
import { Card } from '../styles/shared/Card';
import { Label } from '../styles/shared/Label';
import { InputContainer } from '../styles/shared/InputContainer';


const TargetPriceFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 590px) {
        flex-direction: row;
    }
`;

const TargetPriceInputContainer = styled(InputContainer)`
    flex-grow: 3;
`;

const ButtonsContainer = styled.div`
    flex-grow: 2;
    display: flex;
    gap: 0.5rem;
`;

const Button = styled.button`
    border-radius: var(--border-radius-sm);
    background-color: var(--accent-500);
    color: var(--neutral-100);
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: medium;
    flex-grow: 1;
    padding: 0.5rem;
    box-shadow: 0 3px 0 var(--accent-600);
    margin-bottom: 3px;

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    @media (min-width: 590px) {
        padding: 0;
    }
`;

const GrowthDisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 0;
    margin-top: 2rem;
    font-size: 2rem;

    @media (min-width: 590px) {
        font-size: 3rem;
    }
`;

const Caret = styled.span`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--main-red);
    color: ${props => props.isProfit ? 'var(--positive-500)' : 'var(--negative-500)'};
`;

function isProfit(growthPercentage) {
    return growthPercentage >= 0;
}

const GrowthForm = () => {
    const { setTargetPrice, percentage, targetPrice } = useData();
    const { t } = useTranslation();
    const targetPriceRef = useRef();

    useEffect(() => {
        targetPriceRef.current.value = targetPrice || '';
    }, [targetPrice]);

    function handleTargetPriceChange(e) {
        let targetPrice = e.target.value;
        if (targetPrice.length > 12) e.preventDefault();
        if (!targetPrice) setTargetPrice("0");
        if (numberIsValid(targetPrice)) setTargetPrice(targetPrice);
    }

    function handleAddPrice() {
        const newValue = targetPrice + 1;
        setTargetPrice(newValue);
    }

    function handleMinusPrice() {
        const newValue = targetPrice - 1;
        setTargetPrice(newValue);
    }

    return (
        <Card>
            <Label htmlFor="target-price">{t('target_price_label')}</Label>
            <TargetPriceFormContainer>
                <TargetPriceInputContainer>
                    <input ref={targetPriceRef} name="target-price" maxLength="12" onChange={handleTargetPriceChange} />
                    <span><BiDollar /></span>
                </TargetPriceInputContainer>
                <ButtonsContainer>
                    <Button onClick={handleAddPrice}>+</Button>
                    <Button onClick={handleMinusPrice}>-</Button>
                </ButtonsContainer>
            </TargetPriceFormContainer>
            <GrowthDisplayContainer>
                <Caret isProfit={isProfit(percentage)}>
                    {isProfit(percentage) ? <BiCaretUp /> : <BiCaretDown />}
                </Caret>
                {formatGrowthPercent(percentage)}%
            </GrowthDisplayContainer>
        </Card>
    );
}

export default GrowthForm;