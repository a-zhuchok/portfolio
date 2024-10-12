import React from 'react';
import bsuir from '../img/bsuir.png';
import { useTranslation } from 'react-i18next';

const Bsuir = () => {
    const { t } = useTranslation();
    return (
        <div class='education_item'>
            <img src={bsuir} alt='bsuir' width={80} height={70}></img>
            <p>{t('education.bsuir')}</p>
        </div>
    )
}

export default Bsuir