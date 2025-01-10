import React from 'react';
import { useTranslation } from 'react-i18next';

const Bsuir = () => {
    const { t } = useTranslation();
    return (
        <div class='education_item'>
            <p>{t('education.bsuir')}</p>
        </div>
    )
}

export default Bsuir