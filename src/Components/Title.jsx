import React from 'react';
import { useTranslation } from 'react-i18next';

const Title = () => {
    const { t} = useTranslation();
    return (
        <div class='header_title'>
            <div>{t('header-title')}
                <div>{t('header-description')}</div>
            </div>
        </div>
    )
}

export default Title