import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div class='contacts' id='contacts'>
      <h2 class='contacts_title title'>{t('contacts.title')}</h2>
      <ul class='contacts_list'>
        <li class='contacts_item'>CitHub: <a class='contacts_link' href="https://github.com/a-zhuchok">https://github.com/a-zhuchok</a></li>
        <li class='contacts_item'>Telegram: @metr0log</li>
        <li class='contacts_item'>Codewars: <a class='contacts_link' href="https://www.codewars.com/users/a-zhuchok">https://www.codewars.com/users/a-zhuchok</a> (5 kyu)</li>
        <li class='contacts_item'>{t('contacts.email')}: annazhukova111@yandex.by</li>
        <li class='contacts_item'>{t('contacts.phone')}: +375 (29) 816-19-88</li>
        <li class='contacts_item'>Linkedln: <a class='contacts_link' href="https://www.linkedin.com/feed/?trk=seo-authwall-base_sign-in-submit">www.linkedin.com/in/anna-zhukova-b8121324a</a></li>
      </ul>
    </div>
  )
}

export default Contacts