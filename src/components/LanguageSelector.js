import React, { useState } from 'react';
import i18next from 'i18next';
import styled from 'styled-components';

const StyledSelect = styled.select`
    background: transparent;
    border: 1px solid var(--neutral-200);
    font-size: medium;
    color: var(--neutral-200);
    padding: .3rem;
    cursor: pointer;
    transition: color .3s ease;
    &:hover {
        color: var(--neutral-100);
    }

    option {
        background-color: var(--primary-500);
        padding: 0.3rem;
    }
`;

const LanguageSelector = () => {
    const [selected, setSelected] = useState(localStorage.getItem('i18nextLng') || "en");

    const switchLanguage = (e) => {
        const lang = e.target.value;
        i18next.changeLanguage(lang);
        setSelected(lang);
    }

    return (
        <StyledSelect value={selected} onChange={switchLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </StyledSelect>
    );
};

export default LanguageSelector;