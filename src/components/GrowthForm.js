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
    flex-direction: row;
`;

const TargetPriceInputContainer = styled(InputContainer)`
    flex-grow: 3;
`;

const ButtonsContainer = styled.div`
    flex-grow: 2;
    display: flex;
`;

const Button = styled.button`
    border-radius: var(--border-radius-sm);
    background-color: var(--primary-500);
    color: var(--neutral-100);
    border: none;
    cursor: pointer;
    margin-left: 0.5rem;
    font-family: 'DM Sans', sans-serif;
    flex-grow: 1;

    &:active {
        transform: translateY(2px);
    }
`;

const GrowthDisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 0;
    font-size: 3rem;
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