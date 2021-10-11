import React from 'react';
import MainForm from './MainForm';
import GrowthForm from './GrowthForm';
import LanguageSelector from './LanguageSelector';
import ProfitDisplay from './ProfitDisplay';
import { useTranslation } from 'react-i18next';
import '../styles/App.css';
import logo from '../assets/images/logo.png';
import DataProvider from '../contexts/dataContext';

const App = () => {
    const { t } = useTranslation();

    return (
        <DataProvider>
            <div>
                <header>
                    <img src={logo} alt="logo" />
                </header>
                <div className="tagline-container">
                    <p>{t('tagline')}</p>
                </div>
                <main>
                    <MainForm />
                    <ProfitDisplay />
                    <GrowthForm />
                </main>
                <div className="currency-disclaimer-container">
                    <p>*{t("currency_disclaimer")}</p>
                </div>
                <footer>
                    <div className="me">
                        <p>{t("made_by")}</p>
                        <p>{t("feedback")}</p>
                    </div>
                    <LanguageSelector />
                </footer>
            </div>
        </DataProvider>
    );
}

export default App;
