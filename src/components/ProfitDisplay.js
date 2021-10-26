import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { Card } from '../styles/shared/Card';
import { Label } from '../styles/shared/Label';
import { formatProfitToUSD } from '../utils/formatProfitToUSD';
import useShareLink from '../hooks/useShareLink';
import toast, { Toaster } from 'react-hot-toast';
import ReactGA from '../googleAnalyticsSetup';

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

const LabelAndShareContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ShareButton = styled.div`
    cursor: pointer;
    svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: var(--primary-100);
        transition: fill .2s ease;
    }

    &:hover {
        svg {
            fill: var(--primary-50);
        }
    }
`;


const ProfitDisplay = () => {
    const { profit } = useData();
    const { t } = useTranslation();
    const generateShareLink = useShareLink()

    function handleShareClick() {
        const shareLink = generateShareLink();

        navigator.clipboard.writeText(shareLink).then(function () {
            /* clipboard successfully set */
            toast(t('copied_notice'), {
                position: 'bottom-center',
                duration: 3000,
                icon: '📋',
                style: {
                    color: 'var(--neutral-100)',
                    backgroundColor: 'var(--primary-200)',
                    borderRadius: 'var(--border-radius-sm)'
                }
            });
        }, function () {
            /* clipboard write failed */
            console.error('Failed to copy share url to clipboard. ');
        });
        ReactGA.event({ category: 'button', action: 'click-share-button' })
    }

    return (
        <Card>
            <LabelAndShareContainer>
                <Label>{t('profitloss_label')}</Label>
                <ShareButton onClick={handleShareClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18,14a4,4,0,0,0-3.08,1.48l-5.1-2.35a3.64,3.64,0,0,0,0-2.26l5.1-2.35A4,4,0,1,0,14,6a4.17,4.17,0,0,0,.07.71L8.79,9.14a4,4,0,1,0,0,5.72l5.28,2.43A4.17,4.17,0,0,0,14,18a4,4,0,1,0,4-4ZM18,4a2,2,0,1,1-2,2A2,2,0,0,1,18,4ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z" />
                    </svg>
                </ShareButton>
            </LabelAndShareContainer>
            <ProfitNumberContainer>
                <ProfitNumber isProfit={profit >= 0}>
                    {formatProfitToUSD(profit)}
                </ProfitNumber>
            </ProfitNumberContainer>
            <Toaster />
        </Card>
    );
}

export default ProfitDisplay;
