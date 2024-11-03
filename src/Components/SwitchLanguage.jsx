import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Switch = () => {
    const { t, i18n } = useTranslation();
    const [isToggle, setToggle] = useState(false);
    const onToggle = () => {
        setToggle(!isToggle)
        isToggle ? i18n.changeLanguage('ru') : i18n.changeLanguage('en')
    }

    return (
        <div>
            <label className='switch'>
                <input type='checkbox' onClick={onToggle} checked={isToggle} ></input>
                <span className='slider'>
                <p class='slider_russian'>ru</p>
                <p class='slider_english'>en</p>
                </span>
            </label>
        </div>
    )
};
export default Switch