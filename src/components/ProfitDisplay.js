import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { Card } from '../styles/shared/Card';
import { Label } from '../styles/shared/Label';
import { formatProfitToUSD } from '../utils/formatProfitToUSD';

const ProfitNumberContainer = styled.div`
    display: flex;
    line-height: none;
    justify-content: center;
    height: fit-content;
    margin: auto 0;
    overflow: hidden;
`;

const ProfitNumber = styled.div`
    line-height: none;
    max-width: inherit;
    font-size: 3rem;
    color: ${props => props.isProfit ? 'var(--positive-500)' : 'var(--negative-500)'};
    overflow-x: auto;

    @media (min-width: 590px) {
        font-size: 5rem;
    }
`;

const ProfitDisplay = () => {
    const { profit } = useData();
    const { t } = useTranslation();

    return (
        <Card>
            <Label>{t('profitloss_label')}</Label>
            <ProfitNumberContainer>
                <ProfitNumber isProfit={profit >= 0}>
                    {formatProfitToUSD(profit)}
                </ProfitNumber>
            </ProfitNumberContainer>
        </Card>
    );
}

export default ProfitDisplay;
