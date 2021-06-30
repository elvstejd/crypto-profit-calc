import React, { useState } from 'react';
import i18next from 'i18next';

const LanguageSelector = () => {
    const [selected, setSelected] = useState(localStorage.getItem('i18nextLng') || "en");

    const switchLanguage = (e) => {
        const lang = e.target.value;
        i18next.changeLanguage(lang);
        setSelected(lang);
    }

    return (
        <select value={selected} onChange={switchLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    );
};

export default LanguageSelector;