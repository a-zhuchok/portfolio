import React from 'react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t} = useTranslation();
  return (
      <nav class='header_menu'>
        <ul>
          <li class='header_menu-link'><a href='#about-me'>{t('header_menu-link.about-me')}</a></li>
          <li class='header_menu-link'><a href='#projects'>{t('header_menu-link.projects')}</a></li>
          <li class='header_menu-link'><a href='#education'>{t('header_menu-link.education')}</a></li>
          <li class='header_menu-link'><a href='#contacts'>{t('header_menu-link.contacts')}</a></li>
        </ul>
      </nav>
  )
}

export default Menu