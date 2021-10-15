import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { Card } from '../styles/shared/Card';
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
    font-size: 5rem;
    color: ${props => props.isProfit ? 'var(--positive-500)' : 'var(--negative-500)'};
    overflow-x: auto;
`;

const ProfitDisplay = () => {
    const { profit } = useData();
    const { t } = useTranslation();

    return (
        <Card>
            <label>{t('profitloss_label')}</label>
            <ProfitNumberContainer>
                <ProfitNumber isProfit={profit >= 0}>
                    {formatProfitToUSD(profit)}
                </ProfitNumber>
            </ProfitNumberContainer>
        </Card>
    );
}

export default ProfitDisplay;
