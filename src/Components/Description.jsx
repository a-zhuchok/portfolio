import React from 'react';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t } = useTranslation();
  
  return (
      <div class='about-me_description'>
        <h2 class='about-me_title'>{t('about-me.title')}</h2>
        <div class='about-me_hardskills'>
          <h3 class='hardskills_title'>{t('about-me.hardskills_title')}</h3>
          <ul class='hardskills_list'>
            <li class='hardskills_list-item'>HTML/CSS</li>
            <li class='hardskills_list-item'>JavaScript</li>
            <li class='hardskills_list-item'>React</li>
            <li class='hardskills_list-item'>Redux</li>
            <li class='hardskills_list-item'>Git</li>
            <li class='hardskills_list-item'>DevTools</li>
            <li class='hardskills_list-item'>Manual Testing</li>
            <li class='hardskills_list-item'>VisialStudio</li>
            <li class='hardskills_list-item'>Figma, Canva</li>
            <li class='hardskills_list-item'>Networking basics</li>
            <li class='hardskills_list-item'>SQL basics</li>
            <li class='hardskills_list-item'>Virtualbox</li>
            <li class='hardskills_list-item'>Windows/Linux</li>
            <li class='hardskills_list-item'>Agile</li>
            <li class='hardskills_list-item'>Jira</li>
            <li class='hardskills_list-item'>Swagger</li>
          </ul>
        </div>
      </div>
  )
}

export default Description