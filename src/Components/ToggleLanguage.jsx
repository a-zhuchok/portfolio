import React from 'react';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div class='header_language'>
            <button class='header_language-btn' onClick={() => changeLanguage('ru')}>ru</button>
            <button class='header_language-btn' onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
}

export default ToggleLanguage