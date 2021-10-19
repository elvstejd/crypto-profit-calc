import React from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import { useTranslation } from 'react-i18next';
import DataProvider from '../contexts/dataContext';
import styled from 'styled-components';

// const StyledMain = styled.main`
//     max-width: 60rem;
//     min-height: 30rem;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 20rem 40rem;
//     grid-template-rows: 50% 50%;
//     grid-gap: 1rem;
// `;

const StyledMain = styled.main`
    max-width: 36.8rem;
    min-height: 30rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;

    @media (min-width: 1024px) {
        max-width: 60rem;
        grid-template-columns: 33% 66%;
        grid-template-rows: 50% 50%;
    }
`;

const TaglineWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-top: 2rem;

    p {
        font-size: 1rem;
        text-align: center;

        @media (min-width: 590px) {
            font-size: 1.2rem;
        }
    }
`;

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;

    @media (min-width: 590px) {
        margin-top: 0;
    }
`;

const SourceLink = styled.a`
    color: var(--neutral-200);
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 90% 10%;
    min-height: 100vh;

    & > div:nth-child(2) {
        display: flex;
        align-items: flex-end;
    }
`;


const App = () => {
    const { t } = useTranslation();

    return (
        <DataProvider>
            <GridContainer>
                <div>
                    <TaglineWrapper>
                        <p>{t('tagline')}</p>
                    </TaglineWrapper>
                    <StyledMain>
                        <MainForm />
                        <ProfitDisplay />
                        <GrowthForm />
                    </StyledMain>
                </div>
                <div>
                    <StyledFooter>
                        <SourceLink target="_blank" href="https://github.com/elvstejd/crypto-profit-calc">{t("source_code_label")}</SourceLink>
                        <LanguageSelector />
                    </StyledFooter>
                </div>
            </GridContainer>
        </DataProvider>
    );
}

export default App;
