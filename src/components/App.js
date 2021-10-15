import React from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import { useTranslation } from 'react-i18next';
import DataProvider from '../contexts/dataContext';
import styled from 'styled-components';

const StyledMain = styled.main`
    max-width: 60rem;
    min-height: 30rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 20rem 40rem;
    grid-template-rows: 50% 50%;
    grid-gap: 1rem;
`;

const TaglineWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;

    p {
        font-size: 1.2rem;
        text-align: center;
    }
`;

const DisclaimerContainer = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    margin-top: 1.5rem;

    p {
        color: var(--neutral-200);
        font-size: small;
    }
`;

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`;

const SourceLink = styled.a`
    color: var(--neutral-200);
`;


const App = () => {
    const { t } = useTranslation();

    return (
        <DataProvider>
            <div>
                <TaglineWrapper>
                    <p>{t('tagline')}</p>
                </TaglineWrapper>
                <StyledMain>
                    <MainForm />
                    <ProfitDisplay />
                    <GrowthForm />
                </StyledMain>
                <DisclaimerContainer>
                    <p>*{t("currency_disclaimer")}</p>
                </DisclaimerContainer>
                <StyledFooter>
                    <SourceLink target="_blank" href="https://github.com/elvstejd/crypto-profit-calc">{t("source_code_label")}</SourceLink>
                    <LanguageSelector />
                </StyledFooter>
            </div>
        </DataProvider>
    );
}

export default App;
